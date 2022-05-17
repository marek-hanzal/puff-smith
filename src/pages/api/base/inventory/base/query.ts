import {defaults} from "@/puff-smith/service";
import {BaseService} from "@/puff-smith/service/base/BaseService";
import {IBase, IBaseQuery} from "@/puff-smith/service/base/interface";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"InventoryBase", IBaseQuery, IBase>(async ({request: {filter, ...request}, toUserId}) => BaseService(defaults(toUserId())).handleQuery({
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
