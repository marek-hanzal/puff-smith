import {IBoosterRatioSource} from "@/puff-smith/service/booster/ratio/interface";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {Source} from "@leight-core/server";

export const BoosterRatioSource = (): IBoosterRatioSource => {
	const source: IBoosterRatioSource = Source<IBoosterRatioSource>({
		name: "booster.ratio",
		prisma,
		map: async booster => booster ? ({
			label: `${booster.vg}/${booster.pg}`,
			value: `${booster.vg}/${booster.pg}`,
			vg: booster.vg,
			pg: booster.pg,
		}) : null,
		source: {
			query: async () => source.prisma.booster.findMany({
				distinct: ["pg", "vg"],
				select: {
					vg: true,
					pg: true,
				},
				orderBy: [
					{vg: "asc"},
				],
			}),
		},
	});

	return source;
};
