import {IWireInventorySource} from "@/puff-smith/service/wire/inventory/interface";
import {WireInventorySource} from "@/puff-smith/service/wire/inventory/WireInventorySource";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"WireInventory", IWireInventorySource>({
	source: WireInventorySource,
});
