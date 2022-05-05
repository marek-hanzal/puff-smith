import {ServiceCreate} from "@/puff-smith/service";
import {BaseService} from "@/puff-smith/service/base/BaseService";
import {IBase} from "@/puff-smith/service/base/interface";
import {IMixtureQuery} from "@/puff-smith/service/mixture/interface";
import cache from "@/puff-smith/service/side-effect/cache";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {QueryEndpoint} from "@leight-core/server";
import uniqueObjects from "unique-objects";

export default QueryEndpoint<"Base", IMixtureQuery, IBase>(async ({request, toUserId}) => {
	const baseService = BaseService(ServiceCreate(toUserId()));
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
					base: {
						BaseInventory: {
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
			{base: {name: "asc"}},
		],
		include: {
			base: true,
		}
	})).filter(({base}) => base !== null).map(async ({base: item}) => await baseService.map(item!))), ["id"]) as IBase[];

	return {
		items,
		count: items.length,
		total: items.length,
	};
}, cache);
