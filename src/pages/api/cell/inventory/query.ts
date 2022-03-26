import {QueryEndpoint} from "@leight-core/server";
import {CellInventoryService, ICellInventory, ICellInventoryQuery} from "@/puff-smith/service/cell";

export default QueryEndpoint<"CellsInventory", ICellInventoryQuery, ICellInventory>(CellInventoryService().handleQuery);
