import {BaseInventorySource} from "@/puff-smith/service/base/inventory/BaseInventorySource";
import {IBaseInventorySource} from "@/puff-smith/service/base/inventory/interface";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"BaseInventory", IBaseInventorySource>(BaseInventorySource);
