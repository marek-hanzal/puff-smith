import {ofRequest} from "@/puff-smith/service";
import {IModInventory, IModInventoryDelete} from "@/puff-smith/service/mod/inventory/interface";
import {ModInventoryService} from "@/puff-smith/service/mod/inventory/ModInventoryService";
import {DeleteEndpoint} from "@leight-core/server";

export default DeleteEndpoint<"Delete", IModInventoryDelete, IModInventory[]>(async params => ModInventoryService(ofRequest(params)).handleDelete(params));
