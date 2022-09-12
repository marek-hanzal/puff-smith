import {AromaSource} from "@/puff-smith/service/aroma/AromaSource";
import {AromaMarketCache} from "@/puff-smith/service/aroma/market/cache";
import {IAromaMarketSource} from "@/puff-smith/service/aroma/market/interface";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {pageOf, Source} from "@leight-core/server";
import {merge, singletonOf} from "@leight-core/utils";

export const AromaMarketSource = (): IAromaMarketSource => {
	const aromaSource = singletonOf(() => AromaSource().ofSource(source));

	const source: IAromaMarketSource = Source<IAromaMarketSource>({
		name: "aroma.market",
		prisma,
		map: async aroma => ({
			aroma: await aromaSource().map(aroma),
			isOwned: aroma.AromaInventory.length > 0,
		}),
		cache: AromaMarketCache,
		source: {
			count: async query => source.prisma.aroma.count({
				where: source.withFilter(query),
			}),
			query: async ({orderBy, ...query}) => source.prisma.aroma.findMany({
				where: source.withFilter(query),
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
			withFilter: ({filter: {fulltext, ...filter} = {}}) => merge(filter || {}, {
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
		},
	});

	return source;
};
