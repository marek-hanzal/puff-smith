import {CellInventoryService} from "@/puff-smith/service/cell/inventory/CellInventoryService";
import {ICellInventory, ICellInventoryQuery} from "@/puff-smith/service/cell/inventory/interface";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"CellInventory", ICellInventoryQuery, ICellInventory>(CellInventoryService().handleQuery);
