import {AtomizerInventoryService} from "@/puff-smith/service/atomizer/inventory/AtomizerInventoryService";
import {IAtomizerInventory, IAtomizerInventoryQuery} from "@/puff-smith/service/atomizer/inventory/interface";
import cache from "@/puff-smith/service/side-effect/cache";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"AtomizersInventory", IAtomizerInventoryQuery, IAtomizerInventory>(AtomizerInventoryService().handleQuery, cache);
