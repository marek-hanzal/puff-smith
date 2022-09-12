import {CottonSource} from "@/puff-smith/service/cotton/CottonSource";
import {ICottonMarketSource} from "@/puff-smith/service/cotton/market/interface";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {pageOf, Source} from "@leight-core/server";
import {merge, singletonOf} from "@leight-core/utils";

export const CottonMarketSource = (): ICottonMarketSource => {
	const cottonSource = singletonOf(() => CottonSource().ofSource(source));

	const source: ICottonMarketSource = Source<ICottonMarketSource>({
		name: "cotton.market",
		prisma,
		map: async cotton => ({
			cotton: await cottonSource().map(cotton),
			isOwned: cotton.CottonInventory.length > 0,
		}),
		source: {
			count: async ({filter: {fulltext, ...filter} = {}}) => source.prisma.cotton.count({
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
			query: async ({filter: {fulltext, ...filter} = {}, orderBy, ...query}) => source.prisma.cotton.findMany({
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
					CottonInventory: {
						where: {
							userId: source.user.required(),
						},
					},
					CottonDraw: {
						orderBy: {draw: {sort: "asc"}},
						include: {
							draw: true,
						}
					}
				},
				...pageOf(query),
			}),
		},
	});

	return source;
};
