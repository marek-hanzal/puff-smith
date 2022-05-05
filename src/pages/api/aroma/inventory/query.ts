import {AromaInventoryService} from "@/puff-smith/service/aroma/inventory/AromaInventoryService";
import {IAromaInventory, IAromaInventoryQuery} from "@/puff-smith/service/aroma/inventory/interface";
import cache from "@/puff-smith/service/side-effect/cache";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"AromasInventory", IAromaInventoryQuery, IAromaInventory>(async ({request: {filter, ...request}, toUserId}) => {
	return AromaInventoryService().query({
		...request,
		filter: {
			...filter,
			userId: toUserId(),
		}
	});
}, cache);
