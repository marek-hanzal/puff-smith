import {ofRequest} from "@/puff-smith/service";
import {IModInventory, IModInventoryDelete} from "@/puff-smith/service/mod/inventory/interface";
import {DeleteEndpoint} from "@leight-core/server";
import {ModInventoryRepository} from "../../../../service/mod/inventory/ModInventoryRepository";

export default DeleteEndpoint<"Delete", IModInventoryDelete, IModInventory[]>(async params => ModInventoryRepository(ofRequest(params)).handleDelete(params));
