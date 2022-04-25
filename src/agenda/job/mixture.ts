import {JobService} from "@/puff-smith/service/job";
import {MixtureService, toMixtureInfo} from "@/puff-smith/service/mixture";
import prisma from "@/puff-smith/service/prisma";
import {Agenda} from "agenda";

export const MixtureJobName = "job.mixture";

export default function MixtureJob(agenda: Agenda) {
	agenda.define(MixtureJobName, {
		concurrency: 1,
		priority: 5,
	}, JobService().handle(MixtureJobName, async ({jobProgress, progress}) => {
		const maxNicotine = 6;
		// await jobProgress.total(maxNicotine * await prisma.aroma.count() * await prisma.booster.count() * await prisma.base.count());
		await jobProgress.total(await prisma.aroma.count() * await prisma.booster.count() * await prisma.base.count());
		const mixtureService = MixtureService();
		await prisma.mixture.deleteMany();
		/**
		 * For loop through nicotine strengths (0-20mg/ml).
		 */
		for (let nicotine = 6; nicotine <= maxNicotine; nicotine++) {
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
							return mixtureService.create({
								aromaId: aroma.id,
								baseId: info.base?.baseId,
								boosterId: info.booster?.boosterId,
								volume: aroma.volume?.toNumber() || aroma.content.toNumber(),
								content: info.result.content,
								diff: info.result.volume - info.result.content,
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
