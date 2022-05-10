import {ServiceCreate} from "@/puff-smith/service";
import {BoosterService} from "@/puff-smith/service/booster/BoosterService";
import {IBooster} from "@/puff-smith/service/booster/interface";
import {IMixtureQuery} from "@/puff-smith/service/mixture/interface";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {QueryEndpoint} from "@leight-core/server";
import uniqueObjects from "unique-objects";

export default QueryEndpoint<"Booster", IMixtureQuery, IBooster>(async ({request, toUserId}) => {
	const boosterService = BoosterService(ServiceCreate(toUserId()));
	const items = uniqueObjects(await Promise.all((await prisma.booster.findMany({
		where: {
			BoosterInventory: {
				some: {
					userId: toUserId(),
				},
			},
		},
		orderBy: [
			{name: "asc"},
		],
	})).map(async item => await boosterService.map(item!))), ["id"]) as IBooster[];

	return {
		items,
		count: items.length,
		total: items.length,
	};
});
