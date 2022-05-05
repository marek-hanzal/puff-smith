import {ServiceCreate} from "@/puff-smith/service";
import {BoosterService} from "@/puff-smith/service/booster/BoosterService";
import {IBooster} from "@/puff-smith/service/booster/interface";
import {ILiquidQuery} from "@/puff-smith/service/liquid/interface";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {QueryEndpoint} from "@leight-core/server";
import uniqueObjects from "unique-objects";

export default QueryEndpoint<"Booster", ILiquidQuery, IBooster>(async ({request, toUserId}) => {
	const boosterService = BoosterService(ServiceCreate(toUserId()));
	const items = uniqueObjects(await Promise.all((await prisma.liquid.findMany({
		where: {
			userId: toUserId(),
			archived: null,
		},
		orderBy: [
			{mixture: {booster: {name: "asc"}}},
		],
		include: {
			mixture: {
				include: {
					booster: true,
				},
			},
		},
	})).filter(({mixture: {booster}}) => booster !== null).map(async item => await boosterService.map(item.mixture.booster!))), ["id"]) as IBooster[];

	return {
		items,
		count: items.length,
		total: items.length,
	};
})
;

