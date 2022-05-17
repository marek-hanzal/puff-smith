import {defaults} from "@/puff-smith/service";
import {BoosterService} from "@/puff-smith/service/booster/BoosterService";
import {IBooster, IBoosterQuery} from "@/puff-smith/service/booster/interface";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"InventoryBooster", IBoosterQuery, IBooster>(async ({request: {filter, ...request}, toUserId}) => BoosterService(defaults(toUserId())).handleQuery({
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
