import {BoosterInventoryService} from "@/puff-smith/service/booster/inventory/BoosterInventoryService";
import {IBoosterInventory, IBoosterInventoryQuery} from "@/puff-smith/service/booster/inventory/interface";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"BoostersInventory", IBoosterInventoryQuery, IBoosterInventory>(BoosterInventoryService().handleQuery);
