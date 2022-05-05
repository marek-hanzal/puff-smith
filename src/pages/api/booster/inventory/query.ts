import {BoosterInventoryService} from "@/puff-smith/service/booster/inventory/BoosterInventoryService";
import {IBoosterInventory, IBoosterInventoryQuery} from "@/puff-smith/service/booster/inventory/interface";
import cache from "@/puff-smith/service/side-effect/cache";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"BoostersInventory", IBoosterInventoryQuery, IBoosterInventory>(BoosterInventoryService().handleQuery, cache);
