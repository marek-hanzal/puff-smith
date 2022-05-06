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
	const items = uniqueObjects(await Promise.all((await prisma.base.findMany({
		where: {
			BaseInventory: {
				some: {
					userId: toUserId(),
				},
			},
		},
		orderBy: [
			{name: "asc"},
		],
	})).map(async item => await baseService.map(item))), ["id"]) as IBase[];

	return {
		items,
		count: items.length,
		total: items.length,
	};
}, cache);
