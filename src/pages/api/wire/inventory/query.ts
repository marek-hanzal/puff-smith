import {ofRequest} from "@/puff-smith/service";
import {IWireInventory, IWireInventoryQuery} from "@/puff-smith/service/wire/inventory/interface";
import {WireInventoryService} from "@/puff-smith/service/wire/inventory/WireInventoryService";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"WireInventory", IWireInventoryQuery, IWireInventory>(async params => WireInventoryService(ofRequest(params)).handleQuery(params));
