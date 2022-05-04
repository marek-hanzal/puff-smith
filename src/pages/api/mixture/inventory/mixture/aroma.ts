import {ServiceCreate} from "@/puff-smith/service";
import {AromaService} from "@/puff-smith/service/aroma/AromaService";
import {IAroma} from "@/puff-smith/service/aroma/interface";
import {IMixtureQuery} from "@/puff-smith/service/mixture/interface";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {QueryEndpoint} from "@leight-core/server";
import uniqueObjects from "unique-objects";

export default QueryEndpoint<"Aroma", IMixtureQuery, IAroma>(async ({request, toUserId}) => {
	const aromaService = AromaService(ServiceCreate(toUserId()));
	const items = uniqueObjects(await Promise.all((await prisma.mixture.findMany({
		where: {
			AND: [
				{
					error: null,
					aroma: {
						AromaInventory: {
							some: {
								userId: toUserId(),
							}
						}
					},
					OR: request?.filter?.fulltext ? [
						{
							aroma: {
								name: {
									contains: request.filter.fulltext,
									mode: "insensitive",
								},
							},
						},
						{
							aroma: {
								vendor: {
									name: {
										contains: request.filter.fulltext,
										mode: "insensitive",
									}
								},
							},
						},
					] : undefined,
				},
				{
					OR: [
						{
							base: {
								BaseInventory: {
									some: {
										userId: toUserId(),
									},
								}
							}
						},
						{
							base: null,
						},
					],
				},
				{
					OR: [
						{
							booster: {
								BoosterInventory: {
									some: {
										userId: toUserId(),
									},
								}
							},
						},
						{
							booster: null,
						}
					],
				},
			],
		},
		orderBy: [
			{aroma: {name: "asc"}},
		],
		include: {
			aroma: true,
		}
	})).map(async ({aroma: item}) => await aromaService.map(item))), ["id"]) as IAroma[];

	return {
		items,
		count: items.length,
		total: items.length,
	};
})
;

