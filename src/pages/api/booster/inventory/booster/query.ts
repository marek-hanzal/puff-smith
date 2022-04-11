import {BoosterService, IBooster, IBoosterQuery} from "@/puff-smith/service/booster";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"InventoryBoosters", IBoosterQuery, IBooster>(async ({request: {filter, ...request}, toUserId}) => BoosterService().handleQuery({
	request: {
		...request,
		filter: {
			...filter,
			BoosterInventory: {
				some: {
					userId: toUserId(),
				}
			}
		}
	}
}));
