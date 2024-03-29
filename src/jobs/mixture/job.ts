import {
	IMixtureInventoryAromaJobParams,
	IMixtureInventoryBaseJobParams,
	IMixtureInventoryBoosterJobParams,
	IMixtureJobParams,
	IMixturesJobParams,
	IMixtureUserJobParams,
	MIXTURE_INVENTORY_AROMA_JOB,
	MIXTURE_INVENTORY_BASE_JOB,
	MIXTURE_INVENTORY_BOOSTER_JOB,
	MIXTURE_JOB,
	MIXTURE_USER_JOB,
	MIXTURES_JOB
} from "@/puff-smith/jobs/mixture/interface";
import {JobSource} from "@/puff-smith/service/job/JobSource";
import {MixtureInventorySource} from "@/puff-smith/service/mixture/inventory/MixtureInventorySource";
import {MixtureJobSource} from "@/puff-smith/service/mixture/job/MixtureJobSource";
import {IMixtureInfo, toMixtureInfo} from "@/puff-smith/service/mixture/utils";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {UserSource} from "@/puff-smith/service/user/UserSource";
import {IJobHandlerRequest, IJobProcessor} from "@leight-core/api";
import {Prisma} from "@prisma/client";
import AsyncLock from "async-lock";
import PQueue from "p-queue";

const jobService = JobSource();
const lock = new AsyncLock();

export const MixturesJob: IJobProcessor<IMixturesJobParams> = jobService.processor(MIXTURES_JOB, async ({jobProgress, userId, logger, progress}) => {
	logger.debug("Scheduling updating all mixtures.");
	await jobProgress.setTotal(await prisma.aroma.count());
	for (const aroma of await prisma.aroma.findMany({
		orderBy: {
			name: "asc",
		}
	})) {
		if (aroma.volume && aroma.content < aroma.volume) {
			await progress(async () => MixtureJob.async({
				aromaId: aroma.id,
			}, userId));
			continue;
		}
		await jobProgress.onSkip();
	}
}, options => new PQueue({
	...options,
	concurrency: 1,
	intervalCap: 1,
}));

export const MixtureJob: IJobProcessor<IMixtureJobParams> = jobService.processor(MIXTURE_JOB, async ({jobProgress, params: {aromaId}, userId, logger, progress}) => {
	logger.debug(`Updating mixture of aroma [${aromaId}].`);
	const aroma = await prisma.aroma.findUniqueOrThrow({
		where: {
			id: aromaId,
		},
	});
	const maxNicotine = ((await prisma.booster.aggregate({
		_max: {
			nicotine: true,
		}
		/**
		 * It's not possible to make liquid with same nicotine strength as is
		 * in the booster, to safe some compute time by lowering max. by some epsilon
		 * */
	}))._max.nicotine || 0) - 2;
	await jobProgress.setTotal((maxNicotine + 1) * await prisma.booster.count() * await prisma.base.count());
	const mixtureSource = MixtureJobSource().withUser(await UserSource().asUser(userId));

	const createMixture = async (aromaId: string, baseId: string, boosterId: string, info: IMixtureInfo) => {
		if (info.result.error) {
			return;
		}
		await mixtureSource.create({
			aromaId,
			baseId: info.base ? baseId : undefined,
			baseMl: info.base?.volume || 0,
			boosterId: info.booster ? boosterId : undefined,
			boosterCount: info?.booster?.count || 0,
			volume: aroma.volume,
			available: info.available,
			content: info.result.volume,
			diff: info.result.volume - aroma.volume,
			vg: info.result.ratio.vg,
			pg: info.result.ratio.pg,
			vgToMl: info.result.ml.vg,
			pgToMl: info.result.ml.pg,
			nicotine: info.result.nicotine,
			draws: info.result.draws,
		});
	};

	/**
	 * Run through boosters with nicotine requirement.
	 *
	 * This loops will generate a LOT unique index violations seemingly like an error, but
	 * the "problem" is:
	 *
	 * Unique hash is "aromaId"-"boosterId"-"baseId"-"nicotine".
	 *
	 * Everything is OK until there is a request for nicotine in neighbour strengths like 5 and 6 which could
	 * resolve in the same amount of booster (because there is rounding to use whole booster instead of parts of it) thus
	 * generating same amount of nicotine (last piece of hash) thus for the same combination unique key violation. That's OK, because
	 * this mixture is already generated and valid.
	 */
	const $queue = new PQueue({
		concurrency: 10,
		intervalCap: 10,
		interval: 250,
	});
	for (const booster of await prisma.booster.findMany({
		orderBy: {
			nicotine: "asc",
		},
	})) {
		for (const base of await prisma.base.findMany({
			orderBy: {
				vg: "desc",
			}
		})) {
			for (let nicotine = 0; nicotine <= maxNicotine; nicotine++) {
				await $queue.add(async () => progress(async () => createMixture(aroma.id, base.id, booster.id, await toMixtureInfo({
					nicotine,
					aroma,
					booster,
					base,
				}))));
			}
		}
	}
	await $queue.onIdle();
}, options => new PQueue({
	...options,
	concurrency: 3,
	intervalCap: 3,
}));

const mixtureInventoryUpdate = async <T extends Prisma.MixtureWhereInput, U>(where: T, create: U, {jobProgress, userId, progress}: IJobHandlerRequest<any>) => {
	if (!userId) {
		throw new Error("User not provided!");
	}

	await jobProgress.setTotal(await prisma.mixture.count({
		where,
	}));

	const $mixtures = await prisma.mixture.findMany({
		where,
		select: {
			id: true,
		}
	});
	for (const {id: mixtureId} of $mixtures) {
		await progress(async () => prisma.mixtureInventory.upsert({
			where: {
				mixtureId_userId: {
					mixtureId,
					userId,
				},
			},
			create: {
				mixtureId,
				userId,
				...create
			},
			update: {},
		}), 50);
	}

	await MixtureInventorySource().withUser(await UserSource().asUser(userId)).clearCache();
};

export const MixtureInventoryAromaJob: IJobProcessor<IMixtureInventoryAromaJobParams> = jobService.processor(MIXTURE_INVENTORY_AROMA_JOB, async params => {
	await lock.acquire(`mixture.inventory.aroma.${params.userId}`, async () => {
		params.logger.debug("Mixture inventory aroma update.", {userId: params.userId, aromaId: params.job.params.aromaId});

		if (!params.userId) {
			throw new Error("User not provided!");
		}

		return mixtureInventoryUpdate({
			aromaId: params.job.params.aromaId,
			aroma: {
				AromaInventory: {
					some: {
						userId: params.userId,
					},
				},
			},
			AND: [
				{
					OR: [
						{
							booster: {
								BoosterInventory: {
									some: {
										userId: params.userId,
									},
								},
							},
						},
						{boosterId: null},
					]
				},
				{
					OR: [
						{
							base: {
								BaseInventory: {
									some: {
										userId: params.userId,
									},
								},
							},
						},
						{baseId: null},
					]
				}
			],
		}, {
			aromaInventoryId: params.job.params.aromaInventoryId,
		}, params);
	});
}, options => new PQueue({
	...options,
	concurrency: 5,
	intervalCap: 5,
}));

export const MixtureInventoryBoosterJob: IJobProcessor<IMixtureInventoryBoosterJobParams> = jobService.processor(MIXTURE_INVENTORY_BOOSTER_JOB, async params => {
	await lock.acquire(`mixture.inventory.booster.${params.userId}`, async () => {
		params.logger.debug("Mixture inventory booster update.", {userId: params.userId, boosterId: params.job.params.boosterId});

		if (!params.userId) {
			throw new Error("User not provided!");
		}

		return mixtureInventoryUpdate({
			aroma: {
				AromaInventory: {
					some: {
						userId: params.userId,
					},
				},
			},
			AND: [
				{
					boosterId: params.job.params.boosterId,
					booster: {
						BoosterInventory: {
							some: {
								userId: params.userId,
							},
						},
					},
				},
				{
					OR: [
						{
							base: {
								BaseInventory: {
									some: {
										userId: params.userId,
									},
								},
							},
						},
						{baseId: null},
					]
				}
			],
		}, {
			boosterInventoryId: params.job.params.boosterInventoryId,
		}, params);
	});
}, options => new PQueue({
	...options,
	concurrency: 5,
	intervalCap: 5,
}));

export const MixtureInventoryBaseJob: IJobProcessor<IMixtureInventoryBaseJobParams> = jobService.processor(MIXTURE_INVENTORY_BASE_JOB, async params => {
	await lock.acquire(`mixture.inventory.base.${params.userId}`, async () => {
		params.logger.debug("Mixture inventory base update.", {userId: params.userId, baseId: params.job.params.baseId});

		if (!params.userId) {
			throw new Error("User not provided!");
		}

		return mixtureInventoryUpdate({
			aroma: {
				AromaInventory: {
					some: {
						userId: params.userId,
					},
				},
			},
			AND: [
				{
					baseId: params.job.params.baseId,
					base: {
						BaseInventory: {
							some: {
								userId: params.userId,

							},
						},
					},
				},
				{
					OR: [
						{
							booster: {
								BoosterInventory: {
									some: {
										userId: params.userId,

									},
								},
							},
						},
						{boosterId: null},
					]
				}
			],
		}, {
			baseInventoryId: params.job.params.baseInventoryId,
		}, params);
	});
}, options => new PQueue({
	...options,
	concurrency: 5,
	intervalCap: 5,
}));

export const MixtureUserJob: IJobProcessor<IMixtureUserJobParams> = jobService.processor(MIXTURE_USER_JOB, async ({jobProgress, userId, logger, progress}) => {
	await lock.acquire("mixture-user" + userId, async () => {
		logger.debug("User mixture update.", {userId});

		if (!userId) {
			throw new Error("User not provided!");
		}

		const where = {userId};

		const $aromaInventory = prisma.aromaInventory.findMany({
			where,
		});
		const $boosterInventory = prisma.boosterInventory.findMany({
			where,
		});
		const $baseInventory = prisma.baseInventory.findMany({
			where,
		});

		let $count = 0;
		for (const aromaInventory of await $aromaInventory) {
			for (const boosterInventory of await $boosterInventory) {
				for (const baseInventory of await $baseInventory) {
					$count++;
				}
			}
			for (const baseInventory of await $baseInventory) {
				$count++;
			}
			for (const boosterInventory of await $boosterInventory) {
				$count++;
			}
		}

		await jobProgress.setTotal($count);

		for (const aromaInventory of await $aromaInventory) {
			for (const boosterInventory of await $boosterInventory) {
				for (const baseInventory of await $baseInventory) {
					await progress(async () => {
						const $mixtures = await prisma.mixture.findMany({where: {aromaId: aromaInventory.aromaId, boosterId: boosterInventory.boosterId, baseId: baseInventory.baseId}});
						await prisma.mixtureInventory.createMany({
							data: $mixtures.map(mixture => ({
								mixtureId: mixture.id,
								userId,
								aromaInventoryId: aromaInventory.id,
								baseInventoryId: baseInventory.id,
								boosterInventoryId: boosterInventory.id,
							})),
							skipDuplicates: true,
						});
					});
				}
			}
			for (const baseInventory of await $baseInventory) {
				await progress(async () => {
					const $mixtures = await prisma.mixture.findMany({where: {aromaId: aromaInventory.aromaId, boosterId: null, baseId: baseInventory.baseId}});
					await prisma.mixtureInventory.createMany({
						data: $mixtures.map(mixture => ({
							mixtureId: mixture.id,
							userId,
							aromaInventoryId: aromaInventory.id,
							baseInventoryId: baseInventory.id,
						})),
						skipDuplicates: true,
					});
				});
			}
			for (const boosterInventory of await $boosterInventory) {
				await progress(async () => {
					const $mixtures = await prisma.mixture.findMany({where: {aromaId: aromaInventory.aromaId, boosterId: boosterInventory.boosterId, baseId: null}});
					await prisma.mixtureInventory.createMany({
						data: $mixtures.map(mixture => ({
							mixtureId: mixture.id,
							userId,
							aromaInventoryId: aromaInventory.id,
							boosterInventoryId: boosterInventory.id,
						})),
						skipDuplicates: true,
					});
				});
			}
		}
		await MixtureInventorySource().withUser(await UserSource().asUser(userId)).clearCache();
	});
}, options => new PQueue({
	...options,
	concurrency: 5,
	intervalCap: 5,
}));
