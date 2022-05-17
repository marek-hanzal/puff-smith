import {ServiceCreate} from "@/puff-smith/service";
import {IWireInventory, IWireInventoryQuery} from "@/puff-smith/service/wire/inventory/interface";
import {WireInventoryService} from "@/puff-smith/service/wire/inventory/WireInventoryService";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"WireInventory", IWireInventoryQuery, IWireInventory>(async ({request, toUserId}) => WireInventoryService(ServiceCreate(toUserId())).handleQuery({request}));
