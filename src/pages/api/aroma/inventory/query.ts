import {AromaInventoryService, IAromaInventory, IAromaInventoryQuery} from "@/puff-smith/service/aroma";
import {ServerBootstrap} from "@/puff-smith/service/bootstrap";
import {QueryEndpoint} from "@leight-core/server";

ServerBootstrap();

export default QueryEndpoint<"AromasInventory", IAromaInventoryQuery, IAromaInventory>(async ({request: {filter, ...request}, toUserId}) => {
	return AromaInventoryService().query({
		...request,
		filter: {
			...filter,
			userId: toUserId(),
		}
	});
});
