import {ofParams} from "@/puff-smith/service";
import {CellInventoryRepository} from "@/puff-smith/service/cell/inventory/CellInventoryRepository";
import {ICellInventory, ICellInventoryQuery} from "@/puff-smith/service/cell/inventory/interface";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"CellInventory", ICellInventoryQuery, ICellInventory>(async params => CellInventoryRepository(ofParams(params)).handleQuery(params));
