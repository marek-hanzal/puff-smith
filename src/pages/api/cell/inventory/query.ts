import {CellInventoryService, ICellInventory, ICellInventoryQuery} from "@/puff-smith/service/cell";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"CellsInventory", ICellInventoryQuery, ICellInventory>(CellInventoryService().handleQuery);
