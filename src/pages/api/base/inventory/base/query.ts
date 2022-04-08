import {BaseService, IBase, IBaseQuery} from "@/puff-smith/service/base";
import {ServerBootstrap} from "@/puff-smith/service/bootstrap";
import {QueryEndpoint} from "@leight-core/server";

ServerBootstrap();

export default QueryEndpoint<"InventoryBases", IBaseQuery, IBase>(async ({request: {filter, ...request}, toUserId}) => BaseService().handleQuery({
	request: {
		...request,
		filter: {
			...filter,
			BaseInventory: {
				some: {
					userId: toUserId(),
				}
			}
		}
	}
}));
