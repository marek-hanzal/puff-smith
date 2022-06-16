import {CellInventorySource} from "@/puff-smith/service/cell/inventory/CellInventorySource";
import {ICellInventorySource} from "@/puff-smith/service/cell/inventory/interface";
import {CountEndpoint} from "@leight-core/server";

export default CountEndpoint<"CellInventoryCount", ICellInventorySource>(CellInventorySource);
