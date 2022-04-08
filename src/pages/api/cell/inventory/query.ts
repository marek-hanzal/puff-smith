import {ServerBootstrap} from "@/puff-smith/service/bootstrap";
import {CellInventoryService, ICellInventory, ICellInventoryQuery} from "@/puff-smith/service/cell";
import {QueryEndpoint} from "@leight-core/server";

ServerBootstrap();

export default QueryEndpoint<"CellsInventory", ICellInventoryQuery, ICellInventory>(CellInventoryService().handleQuery);
