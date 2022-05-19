import {ofParams} from "@/puff-smith/service";
import {AromaInventoryRepository} from "@/puff-smith/service/aroma/inventory/AromaInventoryRepository";
import {IAromaInventory, IAromaInventoryQuery} from "@/puff-smith/service/aroma/inventory/interface";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"AromaInventory", IAromaInventoryQuery, IAromaInventory>(async params => AromaInventoryRepository(ofParams(params)).handleQuery(params));
