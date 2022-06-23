import {BaseSource} from "@/puff-smith/service/base/BaseSource";
import {IBaseMarketSource} from "@/puff-smith/service/base/market/interface";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {pageOf, Source} from "@leight-core/server";
import {singletonOf} from "@leight-core/utils";

export const BaseMarketSource = (): IBaseMarketSource => {
	const baseSource = singletonOf(() => BaseSource().ofSource(source));

	const source: IBaseMarketSource = Source<IBaseMarketSource>({
		name: "base.market",
		prisma,
		map: async base => base ? ({
			base: await baseSource().mapper.map(base),
			isOwned: base.BaseInventory.length > 0,
		}) : undefined,
		source: {
			count: async ({filter: {fulltext, ...filter} = {}}) => source.prisma.base.count({
				where: filter,
			}),
			query: async ({filter: {fulltext, ...filter} = {}, orderBy, ...query}) => source.prisma.base.findMany({
				where: filter,
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
