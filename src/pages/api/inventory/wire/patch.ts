import {IWireInventorySource} from "@/puff-smith/service/wire/inventory/interface";
import {WireInventorySource} from "@/puff-smith/service/wire/inventory/WireInventorySource";
import {PatchEndpoint} from "@leight-core/server";

export default PatchEndpoint<"Patch", IWireInventorySource>({
	source: WireInventorySource,
});
