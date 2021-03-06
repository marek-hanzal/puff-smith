import {AtomizerInventorySource} from "@/puff-smith/service/atomizer/inventory/AtomizerInventorySource";
import {IAtomizerInventorySource} from "@/puff-smith/service/atomizer/inventory/interface";
import {CreateEndpoint} from "@leight-core/server";

export default CreateEndpoint<"Create", IAtomizerInventorySource>({
	source: AtomizerInventorySource,
});
