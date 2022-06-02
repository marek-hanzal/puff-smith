import {IMixturesJobParams, MIXTURES_JOB} from "@/puff-smith/jobs/mixture/interface";
import {JobSource} from "@/puff-smith/service/job/JobSource";
import {toMixtureInfo} from "@/puff-smith/service/mixture/utils";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {IJobProcessor} from "@leight-core/api";
import {lengthOf} from "@leight-core/utils";
import PQueue from "p-queue";

const jobService = JobSource();

async function* nicotines() {
	const limit = ((await prisma.booster.aggregate({
		_max: {
			nicotine: true,
		}
		/**
		 * It's not possible to make liquid with same nicotine strength as is
		 * in the booster, to safe some compute time by lowering max. by some epsilon
		 * */
	}))._max.nicotine || 0) - 2;
	for (let nicotine = 0; nicotine <= limit; nicotine++) {
		yield nicotine;
	}
}

export const MixturesJob: IJobProcessor<IMixturesJobParams> = jobService.processor(MIXTURES_JOB, async ({jobProgress, logger, progress}) => {
	logger.debug("Scheduling updating all mixtures.");

	const $aroma = await prisma.aroma.findMany({
		distinct: ["content", "volume", "pg", "vg"],
		select: {
			content: true,
			volume: true,
			pg: true,
			vg: true,
		},
	});
	const $base = await prisma.base.findMany({
		distinct: ["vg", "pg"],
		select: {
			vg: true,
			pg: true,
		},
	});
	const $booster = await prisma.booster.findMany({
		distinct: ["volume", "nicotine", "vg", "pg"],
		select: {
			volume: true,
			nicotine: true,
			vg: true,
			pg: true,
		},
	});

	await jobProgress.setTotal(
		await lengthOf($aroma) *
		await lengthOf($booster) *
		await lengthOf($base) *
		await lengthOf(nicotines())
	);

	await prisma.mixture.deleteMany();

	for await (const aroma of $aroma) {
		for await (const booster of $booster) {
			for await (const base of $base) {
				for await (const nicotine of nicotines()) {
					await progress(async () => {
						const $info = toMixtureInfo({
							nicotine,
							aroma,
							booster,
							base,
						});
						if ($info.result.error) {
							return;
						}
						await prisma.mixture.create({
							data: {
								aroma: aroma.content,
								volume: aroma.volume,
								aromaVg: aroma.vg,
								aromaPg: aroma.pg,
								baseVg: base.vg,
								basePg: base.pg,
								baseMl: $info.base?.volume || 0,
								boosterVolume: booster.volume,
								boosterNicotine: booster.nicotine,
								boosterVg: booster.vg,
								boosterPg: booster.pg,
								withBase: !!$info.base,
								boosterMl: $info.booster?.volume || 0,
								boosterCount: $info.booster?.count || 0,
								withBooster: !!$info.booster,
								nicotine: $info.result.nicotine,
								nicotineToRound: $info.result.nicotineToRound,
								vg: $info.result.ratio.vg,
								vgToMl: $info.result.ml.vg,
								vgToRound: $info.result.round.vg,
								pg: $info.result.ratio.pg,
								pgToMl: $info.result.ml.pg,
								pgToRound: $info.result.round.pg,
							}
						});
					});
				}
			}
		}
	}
}, options => new PQueue({
	...options,
	concurrency: 1,
	intervalCap: 1,
}));
