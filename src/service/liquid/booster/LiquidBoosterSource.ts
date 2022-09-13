import {BoosterSource} from "@/puff-smith/service/booster/BoosterSource";
import {ILiquidBoosterSource, ILiquidBoosterSourceEntity} from "@/puff-smith/service/liquid/booster/interface";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {Source} from "@leight-core/server";
import {merge, singletonOf} from "@leight-core/utils";

export const LiquidBoosterSource = (): ILiquidBoosterSource => {
	const boosterSource = singletonOf(() => BoosterSource().ofSource(source));

	const source: ILiquidBoosterSource = Source<ILiquidBoosterSource>({
		name: "liquid.booster",
		prisma,
		map: async liquid => boosterSource().map(liquid.booster),
		source: {
			query: async ({filter: {fulltext, ...filter} = {}}) => source.prisma.liquid.findMany({
				distinct: ["boosterId"],
				where: merge(filter, {
					userId: source.user.required(),
					NOT: {
						boosterId: null,
					},
					booster: {
						OR: [
							{
								name: {
									contains: fulltext,
									mode: "insensitive",
								},
							},
							{
								vendor: {
									name: {
										contains: fulltext,
										mode: "insensitive",
									},
								},
							}
						],
					}
				}),
				orderBy: [
					{booster: {name: "asc"}},
				],
				select: {
					booster: {
						include: {
							vendor: true,
						}
					}
				},
			}) as Promise<ILiquidBoosterSourceEntity[]>,
		}
	});

	return source;
};
