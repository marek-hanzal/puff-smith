import {ofParams} from "@/puff-smith/service";
import {CellInventoryRepository} from "@/puff-smith/service/cell/inventory/CellInventoryRepository";
import {ICellInventory, ICellInventoryDelete} from "@/puff-smith/service/cell/inventory/interface";
import {DeleteEndpoint} from "@leight-core/server";

export default DeleteEndpoint<"Delete", ICellInventoryDelete, ICellInventory[]>(async params => CellInventoryRepository(ofParams(params)).handleDelete(params));
