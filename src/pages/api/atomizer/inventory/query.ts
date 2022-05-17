import {ServiceCreate} from "@/puff-smith/service";
import {AtomizerInventoryService} from "@/puff-smith/service/atomizer/inventory/AtomizerInventoryService";
import {IAtomizerInventory, IAtomizerInventoryQuery} from "@/puff-smith/service/atomizer/inventory/interface";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"AtomizerInventory", IAtomizerInventoryQuery, IAtomizerInventory>(async ({request, toUserId}) => AtomizerInventoryService(ServiceCreate(toUserId())).handleQuery({request}));
