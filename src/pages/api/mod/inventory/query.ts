import {IModInventory, IModInventoryQuery} from "@/puff-smith/service/mod/inventory/interface";
import {ModInventoryService} from "@/puff-smith/service/mod/inventory/ModInventoryService";
import cache from "@/puff-smith/service/side-effect/cache";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"ModsInventory", IModInventoryQuery, IModInventory>(ModInventoryService().handleQuery, cache);
