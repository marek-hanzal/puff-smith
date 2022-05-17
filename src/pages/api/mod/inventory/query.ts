import {ServiceCreate} from "@/puff-smith/service";
import {IModInventory, IModInventoryQuery} from "@/puff-smith/service/mod/inventory/interface";
import {ModInventoryService} from "@/puff-smith/service/mod/inventory/ModInventoryService";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"ModInventory", IModInventoryQuery, IModInventory>(async ({request, toUserId}) => ModInventoryService(ServiceCreate(toUserId())).handleQuery({request}));
