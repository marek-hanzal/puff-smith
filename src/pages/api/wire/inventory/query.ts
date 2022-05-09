import cache from "@/puff-smith/service/side-effect/cache";
import {IWireInventory, IWireInventoryQuery} from "@/puff-smith/service/wire/inventory/interface";
import {WireInventoryService} from "@/puff-smith/service/wire/inventory/WireInventoryService";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"WiresInventory", IWireInventoryQuery, IWireInventory>(WireInventoryService().handleQuery, cache);
