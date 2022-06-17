import {CellInventorySource} from "@/puff-smith/service/cell/inventory/CellInventorySource";
import {ICellInventorySource} from "@/puff-smith/service/cell/inventory/interface";
import {CreateEndpoint} from "@leight-core/server";

export default CreateEndpoint<"Create", ICellInventorySource>(CellInventorySource);
