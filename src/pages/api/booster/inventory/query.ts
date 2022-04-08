import {BoosterInventoryService, IBoosterInventory, IBoosterInventoryQuery} from "@/puff-smith/service/booster";
import {ServerBootstrap} from "@/puff-smith/service/bootstrap";
import {QueryEndpoint} from "@leight-core/server";

ServerBootstrap();

export default QueryEndpoint<"BoostersInventory", IBoosterInventoryQuery, IBoosterInventory>(BoosterInventoryService().handleQuery);
