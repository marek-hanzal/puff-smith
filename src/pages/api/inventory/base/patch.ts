import {BaseInventorySource} from "@/puff-smith/service/base/inventory/BaseInventorySource";
import {IBaseInventorySource} from "@/puff-smith/service/base/inventory/interface";
import {PatchEndpoint} from "@leight-core/server";

export default PatchEndpoint<"Patch", IBaseInventorySource>({
	source: BaseInventorySource,
});
