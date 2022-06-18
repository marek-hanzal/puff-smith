import {BaseInventorySource} from "@/puff-smith/service/base/inventory/BaseInventorySource";
import {IBaseInventorySource} from "@/puff-smith/service/base/inventory/interface";
import {FetchEndpoint} from "@leight-core/server";

export default FetchEndpoint<"Base", IBaseInventorySource>(BaseInventorySource);
