import prisma from "@/puff-smith/service/side-effect/prisma";
import {IWireMarketSource} from "@/puff-smith/service/wire/market/interface";
import {WireSource} from "@/puff-smith/service/wire/WireSource";
import {pageOf, Source} from "@leight-core/server";
import {merge, singletonOf} from "@leight-core/utils";

export const WireMarketSource = (): IWireMarketSource => {
	const wireSource = singletonOf(() => WireSource().ofSource(source));

	const source: IWireMarketSource = Source<IWireMarketSource>({
		name: "wire.market",
		prisma,
		map: async wire => ({
			wire: await wireSource().map(wire),
			isOwned: wire.WireInventory.length > 0,
		}),
		source: {
			count: async ({filter: {fulltext, ...filter} = {}}) => source.prisma.wire.count({
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
			query: async ({filter: {fulltext, ...filter} = {}, orderBy, ...query}) => source.prisma.wire.findMany({
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
					WireInventory: {
						where: {
							userId: source.user.required(),
						},
					},
					WireFiber: {
						include: {
							fiber: {
								include: {
									material: true,
								},
							},
						},
					},
					WireDraw: {
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
