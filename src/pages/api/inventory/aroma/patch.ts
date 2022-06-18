import {AromaInventorySource} from "@/puff-smith/service/aroma/inventory/AromaInventorySource";
import {IAromaInventorySource} from "@/puff-smith/service/aroma/inventory/interface";
import {PatchEndpoint} from "@leight-core/server";

export default PatchEndpoint<"Patch", IAromaInventorySource>(AromaInventorySource);
