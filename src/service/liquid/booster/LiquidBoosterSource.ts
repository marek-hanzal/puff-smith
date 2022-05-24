import {BoosterSource} from "@/puff-smith/service/booster/BoosterSource";
import {ILiquidBoosterSource} from "@/puff-smith/service/liquid/booster/interface";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {Source} from "@leight-core/server";
import {singletonOf} from "@leight-core/utils";

export const LiquidBoosterSource = (): ILiquidBoosterSource => {
	const boosterSource = singletonOf(() => BoosterSource());

	const source: ILiquidBoosterSource = Source<ILiquidBoosterSource>({
		name: "liquid.booster",
		prisma,
		map: boosterSource().mapper.map,
		source: {
			query: async ({filter}) => source.prisma.booster.findMany({
				where: {
					Liquid: {
						some: {
							userId: source.user.required(),
						},
					},
					name: {
						contains: filter?.fulltext,
						mode: "insensitive",
					},
					vendor: {
						name: {
							contains: filter?.fulltext,
							mode: "insensitive",
						},
					},
				},
				orderBy: [
					{name: "asc"},
				],
				include: {
					vendor: true,
				},
			}),
		}
	});

	return source;
};
