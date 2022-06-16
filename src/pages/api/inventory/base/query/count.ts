import {BaseInventorySource} from "@/puff-smith/service/base/inventory/BaseInventorySource";
import {IBaseInventorySource} from "@/puff-smith/service/base/inventory/interface";
import {CountEndpoint} from "@leight-core/server";

export default CountEndpoint<"BaseInventoryCount", IBaseInventorySource>(BaseInventorySource);
