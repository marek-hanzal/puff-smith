import {CellSource} from "@/puff-smith/service/cell/CellSource";
import {ICellMarketSource} from "@/puff-smith/service/cell/market/interface";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {pageOf, Source} from "@leight-core/server";
import {merge, singletonOf} from "@leight-core/utils";

export const CellMarketSource = (): ICellMarketSource => {
	const cellSource = singletonOf(() => CellSource());

	const source: ICellMarketSource = Source<ICellMarketSource>({
		name: "cell.market",
		prisma,
		map: async cell => cell ? {
			cell: await cellSource().mapper.map(cell),
			isOwned: cell.CellInventory.length > 0,
		} : undefined,
		source: {
			count: async ({filter: {fulltext, ...filter} = {}}) => source.prisma.cell.count({
				where: merge(filter, {
					name: {
						contains: fulltext,
						mode: "insensitive",
					},
					vendor: {
						name: {
							contains: fulltext,
							mode: "insensitive",
						},
					}
				}),
			}),
			query: async ({filter: {fulltext, ...filter} = {}, orderBy, ...query}) => source.prisma.cell.findMany({
				where: merge(filter, {
					name: {
						contains: fulltext,
						mode: "insensitive",
					},
					vendor: {
						name: {
							contains: fulltext,
							mode: "insensitive",
						},
					}
				}),
				orderBy,
				include: {
					vendor: true,
					type: true,
					CellInventory: {
						where: {
							userId: source.user.required(),
						}
					}
				},
				...pageOf(query),
			}),
		}
	});

	return source;
};
