import {IModInventorySource} from "@/puff-smith/service/mod/inventory/interface";
import {ModInventorySource} from "@/puff-smith/service/mod/inventory/ModInventorySource";
import {FetchEndpoint} from "@leight-core/server";

export default FetchEndpoint<"Mod", IModInventorySource>({
	source: ModInventorySource,
});
