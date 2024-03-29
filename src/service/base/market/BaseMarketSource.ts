import {BaseSource} from "@/puff-smith/service/base/BaseSource";
import {IBaseMarketSource} from "@/puff-smith/service/base/market/interface";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {pageOf, Source} from "@leight-core/server";
import {merge, singletonOf} from "@leight-core/utils";

export const BaseMarketSource = (): IBaseMarketSource => {
	const baseSource = singletonOf(() => BaseSource().ofSource(source));

	const source: IBaseMarketSource = Source<IBaseMarketSource>({
		name: "base.market",
		prisma,
		map: async base => ({
			base: await baseSource().map(base),
			isOwned: base.BaseInventory.length > 0,
		}),
		source: {
			count: async ({filter: {fulltext, ...filter} = {}}) => source.prisma.base.count({
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
			query: async ({filter: {fulltext, ...filter} = {}, orderBy, ...query}) => source.prisma.base.findMany({
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
					BaseInventory: {
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
