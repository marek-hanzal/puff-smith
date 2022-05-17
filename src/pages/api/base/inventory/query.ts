import {ServiceCreate} from "@/puff-smith/service";
import {BaseInventoryService} from "@/puff-smith/service/base/inventory/BaseInventoryService";
import {IBaseInventory, IBaseInventoryQuery} from "@/puff-smith/service/base/inventory/interface";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"BaseInventory", IBaseInventoryQuery, IBaseInventory>(async ({request, toUserId}) => BaseInventoryService(ServiceCreate(toUserId())).handleQuery({request}));
