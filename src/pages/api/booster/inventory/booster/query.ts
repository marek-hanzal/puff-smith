import {QueryEndpoint} from "@leight-core/server";
import {BoosterService, IBooster, IBoosterQuery} from "@/puff-smith/service/booster";

export default QueryEndpoint<"InventoryBoosters", IBoosterQuery, IBooster>(async ({request: {filter, ...request}, toUserId}) => BoosterService().handleQuery({
	request: {
		...request,
		filter: {
			...filter,
			BoosterInventory: {
				some: {
					userId: await toUserId(),
				}
			}
		}
	}
}));
