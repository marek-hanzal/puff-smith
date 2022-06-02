import {
	IMixtureInventoryAromaJobParams,
	IMixtureInventoryBaseJobParams,
	IMixtureInventoryBoosterJobParams,
	IMixtureJobParams,
	IMixturesJobParams,
	MIXTURE_INVENTORY_AROMA_JOB,
	MIXTURE_INVENTORY_BASE_JOB,
	MIXTURE_INVENTORY_BOOSTER_JOB,
	MIXTURE_JOB,
	MIXTURES_JOB
} from "@/puff-smith/jobs/mixture/interface";
import {JobSource} from "@/puff-smith/service/job/JobSource";
import {MixtureInventorySource} from "@/puff-smith/service/mixture/inventory/MixtureInventorySource";
import {MixtureSource} from "@/puff-smith/service/mixture/MixtureSource";
import {IMixtureInfo, toMixtureInfo} from "@/puff-smith/service/mixture/utils";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {IJobHandlerRequest, IJobProcessor} from "@leight-core/api";
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
	const aroma = await prisma.aroma.findUnique({
		where: {
			id: aromaId,
		},
		rejectOnNotFound: true
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
	const mixtureSource = MixtureSource().withUserId(userId);

	const createMixture = async (aromaId: string, boosterId: string, baseId: string, info: IMixtureInfo) => {
		const volume = aroma.volume || aroma.content;
		if (info.result.error) {
			return;
		}
		await mixtureSource.create({
			aromaId: aroma.id,
			baseId: baseId,
			baseMl: info.base?.volume || 0,
			boosterId: boosterId,
			boosterCount: info?.booster?.count || 0,
			volume,
			available: info.available,
			content: info.result.volume,
			diff: info.result.volume - volume,
			vg: info.result.ratio.vg,
			pg: info.result.ratio.pg,
			vgToMl: info.result.ml.vg,
			pgToMl: info.result.ml.pg,
			nicotine: info.result.nicotine,
			error: info.result.error,
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
				await $queue.add(async () => progress(async () => createMixture(aroma.id, booster.id, base.id, toMixtureInfo({
					nicotine,
					aroma: {
						...aroma,
						volume: aroma.volume || aroma.content,
					},
					booster,
					base,
				}))));
			}
		}
	}
	await $queue.onIdle();
}, options => new PQueue({
	...options,
	concurrency: 5,
	intervalCap: 5,
}));

const mixtureInventoryUpdate = async <T, U>(where: T, create: U, {jobProgress, userId, progress}: IJobHandlerRequest<any>) => {
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

	await MixtureInventorySource().withUserId(userId).clearCache();
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
