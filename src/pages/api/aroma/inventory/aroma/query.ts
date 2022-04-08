import {AromaService, IAroma, IAromaQuery} from "@/puff-smith/service/aroma";
import {ServerBootstrap} from "@/puff-smith/service/bootstrap";
import {QueryEndpoint} from "@leight-core/server";

ServerBootstrap();

export default QueryEndpoint<"InventoryAromas", IAromaQuery, IAroma>(async ({request: {filter, ...request}, toUserId}) => AromaService().handleQuery({
	request: {
		...request,
		filter: {
			...filter,
			AromaInventory: {
				some: {
					userId: toUserId(),
				}
			}
		}
	}
}));
