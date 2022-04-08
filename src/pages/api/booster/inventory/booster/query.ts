import {BoosterService, IBooster, IBoosterQuery} from "@/puff-smith/service/booster";
import {ServerBootstrap} from "@/puff-smith/service/bootstrap";
import {QueryEndpoint} from "@leight-core/server";

ServerBootstrap();

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
