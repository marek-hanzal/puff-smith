import {AtomizerInventorySource} from "@/puff-smith/service/atomizer/inventory/AtomizerInventorySource";
import {IAtomizerInventorySource} from "@/puff-smith/service/atomizer/inventory/interface";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"AtomizerInventory", IAtomizerInventorySource>(AtomizerInventorySource());
