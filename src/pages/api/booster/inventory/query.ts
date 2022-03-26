import {QueryEndpoint} from "@leight-core/server";
import {BoosterInventoryService, IBoosterInventory, IBoosterInventoryQuery} from "@/puff-smith/service/booster";

export default QueryEndpoint<"BoostersInventory", IBoosterInventoryQuery, IBoosterInventory>(BoosterInventoryService().handleQuery);
