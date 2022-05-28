import {AromaInventorySource} from "@/puff-smith/service/aroma/inventory/AromaInventorySource";
import {IAromaInventorySource} from "@/puff-smith/service/aroma/inventory/interface";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"AromaInventory", IAromaInventorySource>(AromaInventorySource());
