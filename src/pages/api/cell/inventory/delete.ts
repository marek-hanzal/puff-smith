import {ofRequest} from "@/puff-smith/service";
import {CellInventoryService} from "@/puff-smith/service/cell/inventory/CellInventoryService";
import {ICellInventory, ICellInventoryDelete} from "@/puff-smith/service/cell/inventory/interface";
import {DeleteEndpoint} from "@leight-core/server";

export default DeleteEndpoint<"Delete", ICellInventoryDelete, ICellInventory[]>(async params => CellInventoryService(ofRequest(params)).handleDelete(params));
