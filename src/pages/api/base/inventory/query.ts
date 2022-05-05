import {BaseInventoryService} from "@/puff-smith/service/base/inventory/BaseInventoryService";
import {IBaseInventory, IBaseInventoryQuery} from "@/puff-smith/service/base/inventory/interface";
import cache from "@/puff-smith/service/side-effect/cache";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"BasesInventory", IBaseInventoryQuery, IBaseInventory>(BaseInventoryService().handleQuery, cache);
