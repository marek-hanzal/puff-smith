import {BoosterSource} from "@/puff-smith/service/booster/BoosterSource";
import {ILiquidBoosterSource} from "@/puff-smith/service/liquid/booster/interface";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {Source} from "@leight-core/server";
import {merge, singletonOf} from "@leight-core/utils";

export const LiquidBoosterSource = (): ILiquidBoosterSource => {
	const boosterSource = singletonOf(() => BoosterSource().ofSource(source));

	const source: ILiquidBoosterSource = Source<ILiquidBoosterSource>({
		name: "liquid.booster",
		prisma,
		map: async liquid => boosterSource().map(liquid?.booster),
		acl: {
			lock: true,
		},
		source: {
			query: async ({filter: {fulltext, ...filter} = {}}) => source.prisma.liquid.findMany({
				distinct: ["boosterId"],
				where: merge(filter, {
					userId: source.user.required(),
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
			}),
		}
	});

	return source;
};
