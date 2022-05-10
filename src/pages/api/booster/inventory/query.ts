import {BoosterInventoryService} from "@/puff-smith/service/booster/inventory/BoosterInventoryService";
import {IBoosterInventory, IBoosterInventoryQuery} from "@/puff-smith/service/booster/inventory/interface";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"BoosterInventory", IBoosterInventoryQuery, IBoosterInventory>(BoosterInventoryService().handleQuery);
