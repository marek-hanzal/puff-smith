import {IMixtureSource} from "@/puff-smith/service/mixture/interface";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {TagSource} from "@/puff-smith/service/tag/TagSource";
import {Source} from "@leight-core/server";
import {singletonOf} from "@leight-core/utils";

export const MixtureSource = (): IMixtureSource => {
	const tagSource = singletonOf(() => TagSource());

	const source: IMixtureSource = Source<IMixtureSource>({
		name: "mixture",
		prisma,
		map: async mixture => mixture ? {
			id: mixture.id,
			volume: mixture.volume,
			nicotineToRound: mixture.nicotineToRound,
			nicotine: mixture.nicotine,
			vgpg: {
				vg: mixture.vg,
				pg: mixture.pg,
			},
			vgpgToRound: {
				vg: mixture.vgToRound,
				pg: mixture.pgToRound,
			},
			vg: {
				ratio: mixture.vg,
				content: mixture.vgToMl,
				round: mixture.vgToRound,
			},
			pg: {
				ratio: mixture.pg,
				content: mixture.pgToMl,
				round: mixture.pgToRound,
			},
			aroma: {
				content: mixture.aroma,
				vg: mixture.aromaVg,
				pg: mixture.aromaPg,
			},
			base: mixture.withBase ? {
				content: mixture.baseMl,
				vg: mixture.baseVg,
				pg: mixture.basePg,
			} : undefined,
			booster: mixture.withBooster ? {
				content: mixture.boosterMl,
				count: mixture.boosterCount,
				vg: mixture.boosterVg,
				pg: mixture.boosterPg,
			} : undefined,
			draws: await tagSource().mapper.list(Promise.resolve(mixture.MixtureDraw.map(({draw}) => draw))),
		} : undefined,
	});

	return source;
};
