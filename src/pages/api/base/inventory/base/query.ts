import {QueryEndpoint} from "@leight-core/server";
import {BaseService, IBase, IBaseQuery} from "@/puff-smith/service/base";

export default QueryEndpoint<"InventoryBases", IBaseQuery, IBase>(async ({request: {filter, ...request}, toUserId}) => BaseService().handleQuery({
	request: {
		...request,
		filter: {
			...filter,
			BaseInventory: {
				some: {
					userId: await toUserId(),
				}
			}
		}
	}
}));
