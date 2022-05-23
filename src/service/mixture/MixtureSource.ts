import {IMixture, IMixtureEntity, IMixtureQuery, IMixtureSource} from "@/puff-smith/service/mixture/interface";
import {Source} from "@leight-core/server";

export const MixtureSource = (): IMixtureSource => {
	const source = Source<IMixtureEntity, IMixture, IMixtureQuery>({
		name: "mixture",
		get source() {
			return source.prisma.mixture;
		},
		map: async mixture => {
			return {
				...mixture,
				vgToRound: mixture.vgToRound,
				pgToRound: mixture.pgToRound,
				aroma,
				booster: mixture.boosterId ? await boosterSource().toMap(mixture.boosterId) : undefined,
				base: mixture.baseId ? await baseSource().toMap(mixture.baseId) : undefined,
				volume: aroma.volume || 0,
				draws: await Promise.all((await request.prisma.mixtureDraw.findMany({
					where: {
						mixtureId: mixture.id,
					},
					orderBy: {
						draw: {sort: "asc"},
					},
					include: {
						draw: true,
					}
				})).map(({draw}) => tagSource().map(draw))),
			};
		},
	});

	return source;
};
