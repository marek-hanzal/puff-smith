import {ofParams} from "@/puff-smith/service";
import {AromaInventoryRepository} from "@/puff-smith/service/aroma/inventory/AromaInventoryRepository";
import {IAromaInventory, IAromaInventoryDelete} from "@/puff-smith/service/aroma/inventory/interface";
import {DeleteEndpoint} from "@leight-core/server";

export default DeleteEndpoint<"Delete", IAromaInventoryDelete, IAromaInventory[]>(async params => AromaInventoryRepository(ofParams(params)).handleDelete(params));
