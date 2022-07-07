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
		map: async aroma => aroma ? ({
			aroma: await aromaSource().mapper.map(aroma),
			isOwned: aroma.AromaInventory.length > 0,
		}) : null,
		cache: AromaMarketCache,
		source: {
			count: async ({filter: {fulltext, ...filter} = {}}) => source.prisma.aroma.count({
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
			query: async ({filter: {fulltext, ...filter} = {}, orderBy, ...query}) => source.prisma.aroma.findMany({
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
