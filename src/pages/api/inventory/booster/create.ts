import {BoosterInventorySource} from "@/puff-smith/service/booster/inventory/BoosterInventorySource";
import {IBoosterInventorySource} from "@/puff-smith/service/booster/inventory/interface";
import {CreateEndpoint} from "@leight-core/server";

export default CreateEndpoint<"Create", IBoosterInventorySource>(BoosterInventorySource);
