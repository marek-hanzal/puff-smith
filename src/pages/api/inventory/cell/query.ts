import {CellInventorySource} from "@/puff-smith/service/cell/inventory/CellInventorySource";
import {ICellInventorySource} from "@/puff-smith/service/cell/inventory/interface";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"CellInventory", ICellInventorySource>({
	source: CellInventorySource,
});
