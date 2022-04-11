import {AtomizerInventoryService, IAtomizerInventory, IAtomizerInventoryQuery} from "@/puff-smith/service/atomizer";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"AtomizersInventory", IAtomizerInventoryQuery, IAtomizerInventory>(AtomizerInventoryService().handleQuery);
