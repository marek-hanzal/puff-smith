import {ServiceCreate} from "@/puff-smith/service";
import {JobService} from "@/puff-smith/service/job/JobService";
import {MixtureInventoryService} from "@/puff-smith/service/mixture/inventory/MixtureInventoryService";
import {MixtureService} from "@/puff-smith/service/mixture/MixtureService";
import {IMixtureInfo, toMixtureInfo} from "@/puff-smith/service/mixture/utils";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {IJobProcessor} from "@leight-core/api";

const MIXTURES_JOB = "job.mixtures";
const MIXTURE_JOB = "job.mixture";
const MIXTURE_USER_JOB = "job.mixture-user";

export interface IMixturesJobParams {
}

export const MixturesJob: IJobProcessor<IMixturesJobParams> = {
	name: () => MIXTURES_JOB,
	schedule: async (params, userId) => JobService().schedule<IMixturesJobParams>(MIXTURES_JOB, params, userId),
	scheduleAt: async (schedule, params, userId) => JobService().scheduleAt<IMixturesJobParams>(MIXTURES_JOB, schedule, params, userId),
	register: agenda => agenda.define(MIXTURES_JOB, {
		concurrency: 1,
		priority: 4,
	}, JobService().handle<IMixturesJobParams>(MIXTURES_JOB, async ({jobProgress, job: {userId}, logger, progress}) => {
		logger.debug("Scheduling updating all mixtures.");
		await jobProgress.setTotal(await prisma.aroma.count());
		for (const aroma of await prisma.aroma.findMany()) {
			if (aroma.volume && aroma.content < aroma.volume) {
				await progress(async () => MixtureJob.scheduleAt("in 10 seconds", {
					aromaId: aroma.id,
				}, userId));
				continue;
			}
			await jobProgress.onSkip();
		}
	})),
};

export interface IMixtureJobParams {
	aromaId: string;
}

export const MixtureJob: IJobProcessor<IMixtureJobParams> = {
	name: () => MIXTURE_JOB,
	schedule: async (params, userId) => JobService().schedule<IMixtureJobParams>(MIXTURE_JOB, params, userId),
	scheduleAt: async (schedule, params, userId) => JobService().scheduleAt<IMixtureJobParams>(MIXTURE_JOB, schedule, params, userId),
	register: agenda => agenda.define(MIXTURE_JOB, {
		concurrency: 1,
		priority: 5,
	}, JobService().handle<IMixtureJobParams>(MIXTURE_JOB, async ({jobProgress, job: {params: {aromaId}}, logger, progress}) => {
		logger.debug(`Updating mixture of aroma [${aromaId}].`);
		const aroma = await prisma.aroma.findUnique({
			where: {
				id: aromaId,
			},
			rejectOnNotFound: true
		});
		const maxNicotine = (await prisma.booster.aggregate({
			_max: {
				nicotine: true,
			}
		}))._max.nicotine || -1;
		await jobProgress.setTotal((maxNicotine + 1) * await prisma.booster.count() * await prisma.base.count());
		const mixtureService = MixtureService();

		const createMixture = async (info: IMixtureInfo) => {
			const volume = aroma.volume || aroma.content;
			!info.result.error && await mixtureService.create({
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
		 * Run rest through boosters with nicotine requirement.
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
		for (const booster of await prisma.booster.findMany()) {
			for (const base of await prisma.base.findMany()) {
				const $nicotine: { [index: string]: boolean } = {};
				for (let nicotine = 0; nicotine <= maxNicotine; nicotine++) {
					/**
					 * This should resolve problem with initial unique constrain failures for the same
					 * nicotine amount done by booster roundings.
					 */
					const $info = await toMixtureInfo({
						nicotine,
						aroma,
						booster,
						base,
					});
					/**
					 * If there is the same amount of nicotine during this loop, skip it.
					 *
					 * String is used to simplify a bit same nicotine amount lookup and eventually to squash near
					 * same numbers.
					 */
					if ($nicotine[`${$info.result.nicotine}`]) {
						await jobProgress.onSkip();
						continue;
					}
					$nicotine[`${$info.result.nicotine}`] = true;
					await progress(async () => createMixture($info));
				}
			}
		}
	})),
};

export interface IMixtureUserJobParams {
	userId: string;
}

export const MixtureUserJob: IJobProcessor<IMixtureUserJobParams> = {
	name: () => MIXTURE_USER_JOB,
	schedule: async (params, userId) => JobService().schedule<IMixtureUserJobParams>(MIXTURE_USER_JOB, params, userId),
	scheduleAt: async (schedule, params, userId) => JobService().scheduleAt<IMixtureUserJobParams>(MIXTURE_USER_JOB, schedule, params, userId),
	register: agenda => agenda.define(MIXTURE_USER_JOB, {
		concurrency: 10,
		priority: 150,
	}, JobService().handle<IMixtureUserJobParams>(MIXTURE_USER_JOB, async ({jobProgress, job: {params: {userId}}, logger, progress}) => {
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
			await progress(async () => {
				await mixtureInventoryService.create({
					aromaId,
					vendorId: aroma.vendorId,
					boosterId,
					baseId,
					mixtureId: id,
				});
			});
		}
	})),
};
