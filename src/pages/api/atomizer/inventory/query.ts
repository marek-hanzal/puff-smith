import {AtomizerInventoryService} from "@/puff-smith/service/atomizer/inventory/AtomizerInventoryService";
import {IAtomizerInventory, IAtomizerInventoryQuery} from "@/puff-smith/service/atomizer/inventory/interface";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"AtomizersInventory", IAtomizerInventoryQuery, IAtomizerInventory>(AtomizerInventoryService().handleQuery);
