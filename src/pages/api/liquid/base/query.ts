import {ServiceCreate} from "@/puff-smith/service";
import {BaseService} from "@/puff-smith/service/base/BaseService";
import {IBase} from "@/puff-smith/service/base/interface";
import {ILiquidQuery} from "@/puff-smith/service/liquid/interface";
import cache from "@/puff-smith/service/side-effect/cache";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {QueryEndpoint} from "@leight-core/server";
import uniqueObjects from "unique-objects";

export default QueryEndpoint<"Base", ILiquidQuery, IBase>(async ({request, toUserId}) => {
	const baseService = BaseService(ServiceCreate(toUserId()));
	const items = uniqueObjects(await Promise.all((await prisma.liquid.findMany({
		where: {
			userId: toUserId(),
			archived: null,
		},
		orderBy: [
			{mixture: {base: {name: "asc"}}},
		],
		include: {
			mixture: {
				include: {
					base: true,
				},
			},
		},
	})).filter(({mixture: {base}}) => base !== null).map(async item => await baseService.map(item.mixture.base!))), ["id"]) as IBase[];

	return {
		items,
		count: items.length,
		total: items.length,
	};
}, cache);
