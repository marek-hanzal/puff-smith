import {BoosterInventoryService, IBoosterInventory, IBoosterInventoryQuery} from "@/puff-smith/service/booster";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"BoostersInventory", IBoosterInventoryQuery, IBoosterInventory>(BoosterInventoryService().handleQuery);
