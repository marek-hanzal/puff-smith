import {BaseInventorySource} from "@/puff-smith/service/base/inventory/BaseInventorySource";
import {IBaseInventorySource} from "@/puff-smith/service/base/inventory/interface";
import {DeleteEndpoint} from "@leight-core/server";

export default DeleteEndpoint<"Delete", IBaseInventorySource>(BaseInventorySource);
