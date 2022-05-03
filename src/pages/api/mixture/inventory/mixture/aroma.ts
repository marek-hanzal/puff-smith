import {ServiceCreate} from "@/puff-smith/service";
import {AromaService} from "@/puff-smith/service/aroma/AromaService";
import {IAroma} from "@/puff-smith/service/aroma/interface";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {IQuery} from "@leight-core/api";
import {QueryEndpoint} from "@leight-core/server";
import uniqueObjects from "unique-objects";

export default QueryEndpoint<"Aroma", IQuery<{ fulltext?: string }>, IAroma>(async ({request, toUserId}) => {
	const aromaService = AromaService(ServiceCreate(toUserId()));
	const items = uniqueObjects(await Promise.all((await prisma.mixture.findMany({
		where: {
			AND: [
				{
					OR: [
						{
							aroma: {
								name: {
									contains: request?.filter?.fulltext,
									mode: "insensitive",
								},
							},
						},
						{
							aroma: {
								vendor: {
									name: {
										contains: request?.filter?.fulltext,
										mode: "insensitive",
									}
								},
							},
						},
					],
					aroma: {
						AromaInventory: {
							some: {
								userId: toUserId(),
							}
						},
					},
				},
				{
					base: {
						BaseInventory: {
							some: {
								userId: toUserId(),
							}
						}
					},
				},
				{
					booster: {
						BoosterInventory: {
							some: {
								userId: toUserId(),
							}
						}
					}
				}
			]
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

