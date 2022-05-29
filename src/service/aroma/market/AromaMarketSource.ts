import {AromaSource} from "@/puff-smith/service/aroma/AromaSource";
import {AromaMarketCache} from "@/puff-smith/service/aroma/market/cache";
import {IAromaMarketSource} from "@/puff-smith/service/aroma/market/interface";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {pageOf, Source} from "@leight-core/server";
import {singletonOf} from "@leight-core/utils";

export const AromaMarketSource = (): IAromaMarketSource => {
	const aromaSource = singletonOf(() => AromaSource());

	const source: IAromaMarketSource = Source<IAromaMarketSource>({
		name: "aroma.market",
		prisma,
		map: async aroma => aroma ? ({
			aroma: await aromaSource().mapper.map(aroma),
			isOwned: aroma.AromaInventory.length > 0,
		}) : undefined,
		cache: AromaMarketCache,
		source: {
			count: async ({filter: {fulltext, ...filter} = {}}) => source.prisma.aroma.count({
				where: filter,
			}),
			query: async ({filter: {fulltext, ...filter} = {}, orderBy, ...query}) => source.prisma.aroma.findMany({
				where: filter,
				orderBy,
				include: {
					vendor: true,
					AromaTaste: {
						orderBy: [
							{taste: {sort: "asc"}},
						],
						include: {
							taste: true,
						},
					},
					AromaInventory: {
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
