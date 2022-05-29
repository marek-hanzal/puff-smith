import {MixtureRatioCache} from "@/puff-smith/service/mixture/inventory/ratio/cache";
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
		cache: MixtureRatioCache,
		source: {
			query: async () => {
				const userId = source.user.required();
				return source.prisma.mixture.findMany({
					distinct: ["vgToRound", "pgToRound"],
					where: {
						MixtureInventory: {
							some: {
								userId,
							},
						},
					},
					orderBy: [
						{vgToRound: "asc"},
					]
				});
			},
		},
	});

	return source;
};
