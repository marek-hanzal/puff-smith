import {ofRequest} from "@/puff-smith/service";
import {IWireInventory, IWireInventoryQuery} from "@/puff-smith/service/wire/inventory/interface";
import {WireInventoryRepository} from "@/puff-smith/service/wire/inventory/WireInventoryRepository";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"WireInventory", IWireInventoryQuery, IWireInventory>(async params => WireInventoryRepository(ofRequest(params)).handleQuery(params));
