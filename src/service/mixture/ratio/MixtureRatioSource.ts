import {IMixtureRatioSource} from "@/puff-smith/service/mixture/ratio/interface";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {Source} from "@leight-core/server";

export const MixtureRatioSource = (): IMixtureRatioSource => {
	const source: IMixtureRatioSource = Source<IMixtureRatioSource>({
		name: "mixture.ratio",
		prisma,
		map: async mixture => mixture ? ({
			label: `${mixture.vgToRound}/${mixture.pgToRound}`,
			value: `${mixture.vgToRound}/${mixture.pgToRound}`,
			vg: mixture.vgToRound,
			pg: mixture.pgToRound,
		}) : undefined,
		source: {
			query: async () => source.prisma.mixture.findMany({
				distinct: ["vgToRound", "pgToRound"],
				orderBy: [
					{vgToRound: "asc"},
				]
			}),
		},
	});

	return source;
};
