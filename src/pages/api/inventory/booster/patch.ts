import {BoosterInventorySource} from "@/puff-smith/service/booster/inventory/BoosterInventorySource";
import {IBoosterInventorySource} from "@/puff-smith/service/booster/inventory/interface";
import {PatchEndpoint} from "@leight-core/server";

export default PatchEndpoint<"Patch", IBoosterInventorySource>(BoosterInventorySource);
