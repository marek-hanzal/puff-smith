import {CellInventorySource} from "@/puff-smith/service/cell/inventory/CellInventorySource";
import {ICellInventorySource} from "@/puff-smith/service/cell/inventory/interface";
import {DeleteEndpoint} from "@leight-core/server";

export default DeleteEndpoint<"Delete", ICellInventorySource>(CellInventorySource());
