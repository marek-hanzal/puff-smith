import {BoosterInventorySource} from "@/puff-smith/service/booster/inventory/BoosterInventorySource";
import {IBoosterInventorySource} from "@/puff-smith/service/booster/inventory/interface";
import {DeleteEndpoint} from "@leight-core/server";

export default DeleteEndpoint<"Delete", IBoosterInventorySource>(BoosterInventorySource());
