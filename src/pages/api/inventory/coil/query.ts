import {CoilInventorySource} from "@/puff-smith/service/coil/inventory/CoilInventorySource";
import {ICoilInventorySource} from "@/puff-smith/service/coil/inventory/interface";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"CoilInventory", ICoilInventorySource>(CoilInventorySource());
