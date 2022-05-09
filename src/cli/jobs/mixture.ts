import {JobService} from "@/puff-smith/service/job/JobService";
import {IMixtureService} from "@/puff-smith/service/mixture/interface";
import {MixtureService} from "@/puff-smith/service/mixture/MixtureService";
import {toMixtureInfo} from "@/puff-smith/service/mixture/utils";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {IJobProcessor} from "@leight-core/api";

export const JOB_NAME = "job.mixture";

interface IMixtureJobParams {
	aromaId: string | "all";
}

export const MixtureJob: IJobProcessor<IMixtureJobParams> = {
	name: () => JOB_NAME,
	schedule: async (params, userId) => JobService().schedule<IMixtureJobParams>(JOB_NAME, params, userId),
	register: agenda => agenda.define(JOB_NAME, {
		concurrency: 1,
		priority: 5,
	}, JobService().handle<IMixtureJobParams>(JOB_NAME, async ({jobProgress, jobService, job, logger, progress}) => {
		if (job.params?.aromaId === "all") {
			logger.debug("Scheduling updating all mixtures, no 'aromaId' specified.");
			return await prisma.$transaction(async prisma => {
				await jobProgress.setTotal(await prisma.aroma.count());
				for (const aroma of await prisma.aroma.findMany()) {
					if (aroma.volume && aroma.content.toNumber() < aroma.volume.toNumber()) {
						await progress(async () => {
							await jobService.schedule<IMixtureJobParams>(JOB_NAME, {
								aromaId: aroma.id,
							}, job.userId);
						});
						continue;
					}
					await jobProgress.onSkip();
				}
			});
		}
		if (job.params?.aromaId) {
			logger.debug(`Updating mixture of aroma [${job.params.aromaId}].`);
			const aroma = await prisma.aroma.findUnique({
				where: {
					id: job.params.aromaId!,
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
			await prisma.mixture.deleteMany({
				where: {
					aromaId: aroma.id,
				}
			});
			for (const booster of await prisma.booster.findMany()) {
				for (const base of await prisma.base.findMany()) {
					const batch: ReturnType<IMixtureService["toCreate"]>[] = [];
					/**
					 * For loop through nicotine strengths
					 */
					for (let nicotine = 0; nicotine <= maxNicotine; nicotine++) {
						await progress(async () => {
							const info = await toMixtureInfo({
								nicotine,
								aroma,
								booster,
								base,
							});
							const volume = aroma.volume?.toNumber() || aroma.content.toNumber();
							batch.push(mixtureService.toCreate({
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
							}));
						});
					}
					await prisma.mixture.createMany({
						data: batch,
						skipDuplicates: true,
					});
				}
			}
			return;
		}
		throw new Error("Mixture update job without 'aromaId' specified (null for all aromas, value for specific aroma).");
	})),
};
