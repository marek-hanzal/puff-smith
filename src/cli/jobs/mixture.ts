import {JobService} from "@/puff-smith/service/job/JobService";
import {MixtureService} from "@/puff-smith/service/mixture/MixtureService";
import {toMixtureInfo} from "@/puff-smith/service/mixture/utils";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {IJobProcessor} from "@leight-core/api";

const MIXTURES_NAME = "job.mixtures";
const MIXTURE_NAME = "job.mixture";

export interface IMixturesJobParams {
}

export const MixturesJob: IJobProcessor<IMixturesJobParams> = {
	name: () => MIXTURES_NAME,
	schedule: async (params, userId) => JobService().schedule<IMixturesJobParams>(MIXTURES_NAME, params, userId),
	scheduleAt: async (schedule, params, userId) => JobService().scheduleAt<IMixturesJobParams>(MIXTURES_NAME, schedule, params, userId),
	register: agenda => agenda.define(MIXTURES_NAME, {
		concurrency: 1,
		priority: 4,
	}, JobService().handle<IMixturesJobParams>(MIXTURES_NAME, async ({jobProgress, job: {userId}, logger, progress}) => {
		logger.debug("Scheduling updating all mixtures.");
		await jobProgress.setTotal(await prisma.aroma.count());
		for (const aroma of await prisma.aroma.findMany()) {
			if (aroma.volume && aroma.content.toNumber() < aroma.volume.toNumber()) {
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
	name: () => MIXTURE_NAME,
	schedule: async (params, userId) => JobService().schedule<IMixtureJobParams>(MIXTURE_NAME, params, userId),
	scheduleAt: async (schedule, params, userId) => JobService().scheduleAt<IMixtureJobParams>(MIXTURE_NAME, schedule, params, userId),
	register: agenda => agenda.define(MIXTURE_NAME, {
		concurrency: 5,
		priority: 5,
	}, JobService().handle<IMixtureJobParams>(MIXTURE_NAME, async ({jobProgress, job: {params: {aromaId}}, logger, progress}) => {
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
		}))._max.nicotine?.toNumber() || -1;
		await jobProgress.setTotal((maxNicotine + 1) * await prisma.booster.count() * await prisma.base.count());
		const mixtureService = MixtureService();
		for (const booster of await prisma.booster.findMany()) {
			for (const base of await prisma.base.findMany()) {
				for (let nicotine = 0; nicotine <= maxNicotine; nicotine++) {
					await progress(async () => {
						const info = await toMixtureInfo({
							nicotine,
							aroma,
							booster,
							base,
						});
						const volume = aroma.volume?.toNumber() || aroma.content.toNumber();
						!info.result.error && await mixtureService.create({
							aromaId: aroma.id,
							baseId: info.base?.baseId,
							baseMl: info.base?.volume || 0,
							boosterId: info.booster?.boosterId,
							boosterCount: info.booster?.count || 0,
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
						});
					});
				}
			}
		}
	})),
};
