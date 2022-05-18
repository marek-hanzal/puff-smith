import {ofRequest} from "@/puff-smith/service";
import {IWireInventory, IWireInventoryDelete} from "@/puff-smith/service/wire/inventory/interface";
import {WireInventoryService} from "@/puff-smith/service/wire/inventory/WireInventoryService";
import {DeleteEndpoint} from "@leight-core/server";

export default DeleteEndpoint<"Delete", IWireInventoryDelete, IWireInventory[]>(async params => WireInventoryService(ofRequest(params)).handleDelete(params));
