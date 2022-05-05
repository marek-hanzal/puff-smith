import {CellInventoryService} from "@/puff-smith/service/cell/inventory/CellInventoryService";
import {ICellInventory, ICellInventoryQuery} from "@/puff-smith/service/cell/inventory/interface";
import cache from "@/puff-smith/service/side-effect/cache";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"CellsInventory", ICellInventoryQuery, ICellInventory>(CellInventoryService().handleQuery, cache);
