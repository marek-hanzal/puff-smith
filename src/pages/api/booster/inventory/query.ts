import {BoosterInventorySource} from "@/puff-smith/service/booster/inventory/BoosterInventorySource";
import {IBoosterInventorySource} from "@/puff-smith/service/booster/inventory/interface";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"BoosterInventory", IBoosterInventorySource>(BoosterInventorySource());
