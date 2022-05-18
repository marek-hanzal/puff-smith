import {ofRequest} from "@/puff-smith/service";
import {AromaInventoryService} from "@/puff-smith/service/aroma/inventory/AromaInventoryService";
import {IAromaInventory, IAromaInventoryDelete} from "@/puff-smith/service/aroma/inventory/interface";
import {DeleteEndpoint} from "@leight-core/server";

export default DeleteEndpoint<"Delete", IAromaInventoryDelete, IAromaInventory[]>(async params => AromaInventoryService(ofRequest(params)).handleDelete(params));
