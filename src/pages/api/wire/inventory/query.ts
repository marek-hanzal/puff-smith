import {defaults} from "@/puff-smith/service";
import {IWireInventory, IWireInventoryQuery} from "@/puff-smith/service/wire/inventory/interface";
import {WireInventoryService} from "@/puff-smith/service/wire/inventory/WireInventoryService";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"WireInventory", IWireInventoryQuery, IWireInventory>(async ({request, toUserId}) => WireInventoryService(defaults(toUserId())).handleQuery({request}));
