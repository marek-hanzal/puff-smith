import {AtomizerInventorySource} from "@/puff-smith/service/atomizer/inventory/AtomizerInventorySource";
import {IAtomizerInventorySource} from "@/puff-smith/service/atomizer/inventory/interface";
import {PatchEndpoint} from "@leight-core/server";

export default PatchEndpoint<"Patch", IAtomizerInventorySource>({
	source: AtomizerInventorySource,
});
