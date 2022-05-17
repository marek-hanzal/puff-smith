import {ofRequest} from "@/puff-smith/service";
import {AromaInventoryService} from "@/puff-smith/service/aroma/inventory/AromaInventoryService";
import {IAromaInventory, IAromaInventoryDelete} from "@/puff-smith/service/aroma/inventory/interface";
import {MutationEndpoint} from "@leight-core/server";

export default MutationEndpoint<"Delete", IAromaInventoryDelete, IAromaInventory[]>(async params => AromaInventoryService(ofRequest(params)).handleDelete(params));
