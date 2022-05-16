import {IMixtureJobParams, IMixturesJobParams, IMixtureUserJobParams, MIXTURE_JOB, MIXTURE_USER_JOB, MIXTURES_JOB} from "@/puff-smith/jobs/mixture/interface";
import {ServiceCreate} from "@/puff-smith/service";
import {JobService} from "@/puff-smith/service/job/JobService";
import {MixtureInventoryService} from "@/puff-smith/service/mixture/inventory/MixtureInventoryService";
import {MixtureService} from "@/puff-smith/service/mixture/MixtureService";
import {IMixtureInfo, toMixtureInfo} from "@/puff-smith/service/mixture/utils";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {IJobProcessor} from "@leight-core/api";
import PQueue from "p-queue";

const jobService = JobService();

export const MixturesJob: IJobProcessor<IMixturesJobParams> = jobService.processor(MIXTURES_JOB, async ({jobProgress, userId, logger, progress}) => {
	logger.debug("Scheduling updating all mixtures.");
	await jobProgress.setTotal(await prisma.aroma.count());
	for (const aroma of await prisma.aroma.findMany()) {
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

export const MixtureJob: IJobProcessor<IMixtureJobParams> = jobService.processor(MIXTURE_JOB, async ({jobProgress, params: {aromaId}, logger, progress}) => {
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
	const mixtureService = MixtureService();

	const createMixture = async (info: IMixtureInfo) => {
		const volume = aroma.volume || aroma.content;
		if (info.result.error) {
			return;
		}
		await mixtureService.create({
			aromaId: aroma.id,
			baseId: info.base?.baseId,
			baseMl: info.base?.volume || 0,
			boosterId: info.booster?.boosterId,
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
		concurrency: 5,
		intervalCap: 5,
		interval: 250,
	});
	for (const booster of await prisma.booster.findMany()) {
		for (const base of await prisma.base.findMany()) {
			for (let nicotine = 0; nicotine <= maxNicotine; nicotine++) {
				await $queue.add(async () => {
					await progress(async () => createMixture(await toMixtureInfo({
						nicotine,
						aroma,
						booster,
						base,
					})));
				});
			}
		}
	}
	await $queue.onIdle();
}, options => new PQueue({
	...options,
	concurrency: 5,
	intervalCap: 5,
}));

export const MixtureUserJob: IJobProcessor<IMixtureUserJobParams> = JobService().processor(MIXTURE_USER_JOB, async ({jobProgress, userId, logger, progress}) => {
	logger.debug("User mixture update.", {userId});

	if (!userId) {
		throw new Error("User not provided!");
	}

	const where = {
		aroma: {
			AromaInventory: {
				some: {
					userId,
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
									userId,
								},
							},
						},
					},
					{
						boosterId: null,
					}
				]
			},
			{
				OR: [
					{
						base: {
							BaseInventory: {
								some: {
									userId,
								},
							},
						},
					},
					{
						baseId: null,
					}
				]
			}
		],
	};

	await jobProgress.setTotal(await prisma.mixture.count({
		where,
	}));

	const mixtureInventoryService = MixtureInventoryService(ServiceCreate(userId));

	const $mixtures = (await prisma.mixture.findMany({
		include: {
			aroma: true,
			booster: true,
			base: true,
		},
		where,
	}));
	for (const {aromaId, aroma, boosterId, booster, baseId, base, id} of $mixtures) {
		logger.debug(`Connecting mixture [id ${id}] [aroma ${aroma.name}] [booster ${booster?.name || "-"}] [base ${base?.name || "-"}]`);
		await progress(async () => mixtureInventoryService.create({
			aromaId,
			vendorId: aroma.vendorId,
			boosterId,
			baseId,
			mixtureId: id,
		}), 250);
	}
});
