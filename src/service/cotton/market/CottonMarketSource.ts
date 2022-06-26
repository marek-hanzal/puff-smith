import {CottonSource} from "@/puff-smith/service/cotton/CottonSource";
import {ICottonMarketSource} from "@/puff-smith/service/cotton/market/interface";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {pageOf, Source} from "@leight-core/server";
import {singletonOf} from "@leight-core/utils";

export const CottonMarketSource = (): ICottonMarketSource => {
	const cottonSource = singletonOf(() => CottonSource().ofSource(source));

	const source: ICottonMarketSource = Source<ICottonMarketSource>({
		name: "cotton.market",
		prisma,
		map: async cotton => cotton ? {
			cotton: await cottonSource().mapper.map(cotton),
			isOwned: cotton.CottonInventory.length > 0,
		} : null,
		source: {
			count: async ({filter: {fulltext, ...filter} = {}}) => source.prisma.cotton.count({
				where: filter,
			}),
			query: async ({filter: {fulltext, ...filter} = {}, orderBy, ...query}) => source.prisma.cotton.findMany({
				where: filter,
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
