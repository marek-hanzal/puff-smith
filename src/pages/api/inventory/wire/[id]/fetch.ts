import {IWireInventorySource} from "@/puff-smith/service/wire/inventory/interface";
import {WireInventorySource} from "@/puff-smith/service/wire/inventory/WireInventorySource";
import {FetchEndpoint} from "@leight-core/server";

export default FetchEndpoint<"Wire", IWireInventorySource>({
	source: WireInventorySource,
});
