import {ServiceCreate} from "@/puff-smith/service";
import {CellInventoryService} from "@/puff-smith/service/cell/inventory/CellInventoryService";
import {ICellInventory, ICellInventoryQuery} from "@/puff-smith/service/cell/inventory/interface";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"CellInventory", ICellInventoryQuery, ICellInventory>(async ({request, toUserId}) => CellInventoryService(ServiceCreate(toUserId())).handleQuery({request}));
