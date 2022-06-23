import {CoilInventorySource} from "@/puff-smith/service/coil/inventory/CoilInventorySource";
import {ICoilInventorySource} from "@/puff-smith/service/coil/inventory/interface";
import {CountEndpoint} from "@leight-core/server";

export default CountEndpoint<"CoilInventoryCount", ICoilInventorySource>({
	source: CoilInventorySource,
});
