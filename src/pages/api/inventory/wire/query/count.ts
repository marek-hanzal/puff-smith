import {IWireInventorySource} from "@/puff-smith/service/wire/inventory/interface";
import {WireInventorySource} from "@/puff-smith/service/wire/inventory/WireInventorySource";
import {CountEndpoint} from "@leight-core/server";

export default CountEndpoint<"WireInventoryCount", IWireInventorySource>(WireInventorySource());
