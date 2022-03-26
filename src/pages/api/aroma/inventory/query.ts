import {QueryEndpoint} from "@leight-core/server";
import {AromaInventoryService, IAromaInventory, IAromaInventoryQuery} from "@/puff-smith/service/aroma";

export default QueryEndpoint<"AromasInventory", IAromaInventoryQuery, IAromaInventory>(AromaInventoryService().handleQuery);
