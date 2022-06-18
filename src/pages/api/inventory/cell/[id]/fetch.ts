import {CellInventorySource} from "@/puff-smith/service/cell/inventory/CellInventorySource";
import {ICellInventorySource} from "@/puff-smith/service/cell/inventory/interface";
import {FetchEndpoint} from "@leight-core/server";

export default FetchEndpoint<"Cell", ICellInventorySource>(CellInventorySource);
