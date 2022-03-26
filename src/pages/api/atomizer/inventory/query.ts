import {QueryEndpoint} from "@leight-core/server";
import {AtomizerInventoryService, IAtomizerInventory, IAtomizerInventoryQuery} from "@/puff-smith/service/atomizer";

export default QueryEndpoint<"AtomizersInventory", IAtomizerInventoryQuery, IAtomizerInventory>(AtomizerInventoryService().handleQuery);
