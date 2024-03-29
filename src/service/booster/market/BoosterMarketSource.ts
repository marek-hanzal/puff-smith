import {BoosterSource} from "@/puff-smith/service/booster/BoosterSource";
import {IBoosterMarketSource} from "@/puff-smith/service/booster/market/interface";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {pageOf, Source} from "@leight-core/server";
import {merge, singletonOf} from "@leight-core/utils";

export const BoosterMarketSource = (): IBoosterMarketSource => {
	const boosterSource = singletonOf(() => BoosterSource().ofSource(source));

	const source: IBoosterMarketSource = Source<IBoosterMarketSource>({
		name: "booster.market",
		prisma,
		map: async booster => ({
			booster: await boosterSource().map(booster),
			isOwned: booster.BoosterInventory.length > 0,
		}),
		source: {
			count: async ({filter: {fulltext, ...filter} = {}}) => source.prisma.booster.count({
				where: merge(filter || {}, {
					OR: [
						{
							name: {
								contains: fulltext,
								mode: "insensitive",
							}
						},
						{
							vendor: {
								name: {
									contains: fulltext,
									mode: "insensitive",
								},
							}
						},
					],
				}),
			}),
			query: async ({filter: {fulltext, ...filter} = {}, orderBy, ...query}) => source.prisma.booster.findMany({
				where: merge(filter || {}, {
					OR: [
						{
							name: {
								contains: fulltext,
								mode: "insensitive",
							}
						},
						{
							vendor: {
								name: {
									contains: fulltext,
									mode: "insensitive",
								},
							}
						},
					],
				}),
				orderBy,
				include: {
					vendor: true,
					BoosterInventory: {
						where: {
							userId: source.user.required(),
						},
					},
				},
				...pageOf(query),
			}),
		},
	});

	return source;
};
