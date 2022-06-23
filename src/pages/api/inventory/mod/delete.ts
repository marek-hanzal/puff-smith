import {IModInventorySource} from "@/puff-smith/service/mod/inventory/interface";
import {ModInventorySource} from "@/puff-smith/service/mod/inventory/ModInventorySource";
import {DeleteEndpoint} from "@leight-core/server";

export default DeleteEndpoint<"Delete", IModInventorySource>({
	source: ModInventorySource,
});
