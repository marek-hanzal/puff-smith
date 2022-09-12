import {AtomizerSource} from "@/puff-smith/service/atomizer/AtomizerSource";
import {IAtomizerMarketSource} from "@/puff-smith/service/atomizer/market/interface";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {pageOf, Source} from "@leight-core/server";
import {merge, singletonOf} from "@leight-core/utils";

export const AtomizerMarketSource = (): IAtomizerMarketSource => {
	const atomizerSource = singletonOf(() => AtomizerSource().ofSource(source));

	const source: IAtomizerMarketSource = Source<IAtomizerMarketSource>({
		name: "atomizer.market",
		prisma,
		map: async atomizer => ({
			atomizer: await atomizerSource().map(atomizer),
			isOwned: atomizer.AtomizerInventory.length > 0,
		}),
		source: {
			count: async ({filter: {fulltext, ...filter} = {}}) => source.prisma.atomizer.count({
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
			query: async ({filter: {fulltext, ...filter} = {}, orderBy, ...query}) => source.prisma.atomizer.findMany({
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
					user: true,
					vendor: true,
					AtomizerDraw: {
						orderBy: {draw: {sort: "asc"}},
						include: {
							draw: true,
						}
					},
					AtomizerInventory: {
						where: {
							userId: source.user.required(),
						}
					},
				},
				...pageOf(query),
			}),
		}
	});

	return source;
};
