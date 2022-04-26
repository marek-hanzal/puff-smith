import {JobService} from "@/puff-smith/service/job/JobService";
import {MixtureService} from "@/puff-smith/service/mixture/MixtureService";
import {toMixtureInfo} from "@/puff-smith/service/mixture/utils";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {Agenda} from "agenda";

export const MixtureJobName = "job.mixture";

export default function MixtureJob(agenda: Agenda) {
	agenda.define(MixtureJobName, {
		concurrency: 1,
		priority: 5,
	}, JobService().handle(MixtureJobName, async ({jobProgress, progress}) => {
		const maxNicotine = 18;
		await jobProgress.total(maxNicotine * await prisma.aroma.count() * await prisma.booster.count() * await prisma.base.count());
		const mixtureService = MixtureService();
		await prisma.mixture.deleteMany();
		/**
		 * For loop through nicotine strengths (0-20mg/ml).
		 */
		for (let nicotine = 0; nicotine <= maxNicotine; nicotine++) {
			/**
			 * run through all aromas...
			 */
			for (const aroma of await prisma.aroma.findMany()) {
				for (const booster of await prisma.booster.findMany()) {
					for (const base of await prisma.base.findMany()) {
						await progress(async () => {
							const info = await toMixtureInfo({
								nicotine,
								aroma,
								booster,
								base,
							});
							const volume = aroma.volume?.toNumber() || aroma.content.toNumber();
							return mixtureService.create({
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
		}
	}));
}
