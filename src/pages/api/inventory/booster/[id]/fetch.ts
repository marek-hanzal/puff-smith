import {BoosterInventorySource} from "@/puff-smith/service/booster/inventory/BoosterInventorySource";
import {IBoosterInventorySource} from "@/puff-smith/service/booster/inventory/interface";
import {FetchEndpoint} from "@leight-core/server";

export default FetchEndpoint<"Booster", IBoosterInventorySource>(BoosterInventorySource);
