import {IModInventorySource} from "@/puff-smith/service/mod/inventory/interface";
import {ModInventorySource} from "@/puff-smith/service/mod/inventory/ModInventorySource";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"ModInventory", IModInventorySource>(ModInventorySource());
