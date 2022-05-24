import {BaseInventorySource} from "@/puff-smith/service/base/inventory/BaseInventorySource";
import {IBaseInventorySource} from "@/puff-smith/service/base/inventory/interface";
import {CreateEndpoint} from "@leight-core/server";

export default CreateEndpoint<"Create", IBaseInventorySource>(BaseInventorySource());
