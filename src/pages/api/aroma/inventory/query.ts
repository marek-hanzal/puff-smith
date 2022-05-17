import {defaults} from "@/puff-smith/service";
import {AromaInventoryService} from "@/puff-smith/service/aroma/inventory/AromaInventoryService";
import {IAromaInventory, IAromaInventoryQuery} from "@/puff-smith/service/aroma/inventory/interface";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"AromaInventory", IAromaInventoryQuery, IAromaInventory>(async ({request, toUserId}) => AromaInventoryService(defaults(toUserId())).handleQuery({request}));
