import {IBoosterRatioSource} from "@/puff-smith/service/booster/ratio/interface";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {Source} from "@leight-core/server";

export const BoosterRatioSource = (): IBoosterRatioSource => {
	const source: IBoosterRatioSource = Source<IBoosterRatioSource>({
		name: "booster.ratio",
		prisma,
		source: {
			query: async () => source.prisma.booster.findMany({
				distinct: ["pg", "vg"],
				orderBy: [
					{vg: "asc"},
				],
				include: {
					vendor: true,
				}
			}),
		},
		map: async ({pg, vg}) => ({
			label: `${vg}/${pg}`,
			value: `${vg}/${pg}`,
			vg,
			pg,
		}),
	});

	return source;
};
