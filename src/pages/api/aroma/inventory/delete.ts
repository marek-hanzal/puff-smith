import {ServiceCreate} from "@/puff-smith/service";
import {AromaInventoryService} from "@/puff-smith/service/aroma/inventory/AromaInventoryService";
import {IAromaInventory, IAromaInventoryDelete} from "@/puff-smith/service/aroma/inventory/interface";
import {MutationEndpoint} from "@leight-core/server";

export default MutationEndpoint<"Delete", IAromaInventoryDelete, IAromaInventory[]>(async ({request, toUserId}) => AromaInventoryService(ServiceCreate(toUserId())).handleDelete({request}));
