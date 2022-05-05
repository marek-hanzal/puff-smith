import {ServiceCreate} from "@/puff-smith/service";
import {BoosterService} from "@/puff-smith/service/booster/BoosterService";
import {IBooster} from "@/puff-smith/service/booster/interface";
import {IMixtureQuery} from "@/puff-smith/service/mixture/interface";
import cache from "@/puff-smith/service/side-effect/cache";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {QueryEndpoint} from "@leight-core/server";
import uniqueObjects from "unique-objects";

export default QueryEndpoint<"Booster", IMixtureQuery, IBooster>(async ({request, toUserId}) => {
	const boosterService = BoosterService(ServiceCreate(toUserId()));
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
					booster: {
						BoosterInventory: {
							some: {
								userId: toUserId(),
							},
						}
					},
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
			],
		},
		orderBy: [
			{booster: {name: "asc"}},
		],
		include: {
			booster: true,
		}
	})).filter(({booster}) => booster !== null).map(async ({booster: item}) => await boosterService.map(item!))), ["id"]) as IBooster[];

	return {
		items,
		count: items.length,
		total: items.length,
	};
}, cache);
