import {BoosterInventorySource} from "@/puff-smith/service/booster/inventory/BoosterInventorySource";
import {IBoosterInventorySource} from "@/puff-smith/service/booster/inventory/interface";
import {CountEndpoint} from "@leight-core/server";

export default CountEndpoint<"BoosterInventoryCount", IBoosterInventorySource>(BoosterInventorySource);
