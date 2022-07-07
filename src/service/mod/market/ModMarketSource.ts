import {IModMarketSource} from "@/puff-smith/service/mod/market/interface";
import {ModSource} from "@/puff-smith/service/mod/ModSource";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {pageOf, Source} from "@leight-core/server";
import {merge, singletonOf} from "@leight-core/utils";

export const ModMarketSource = (): IModMarketSource => {
	const modSource = singletonOf(() => ModSource().ofSource(source));

	const source: IModMarketSource = Source<IModMarketSource>({
		name: "mod.market",
		prisma,
		map: async mod => mod ? {
			mod: await modSource().mapper.map(mod),
			isOwned: mod.ModInventory.length > 0,
		} : null,
		source: {
			count: async ({filter: {fulltext, ...filter} = {}}) => source.prisma.mod.count({
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
			query: async ({filter: {fulltext, ...filter} = {}, orderBy, ...query}) => source.prisma.mod.findMany({
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
					ModCell: {
						orderBy: {cell: {sort: "asc"}},
						include: {
							cell: true,
						}
					},
					ModInventory: {
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
