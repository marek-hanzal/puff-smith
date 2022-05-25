import {IWireInventorySource} from "@/puff-smith/service/wire/inventory/interface";
import {WireInventorySource} from "@/puff-smith/service/wire/inventory/WireInventorySource";
import {CreateEndpoint} from "@leight-core/server";

export default CreateEndpoint<"Create", IWireInventorySource>(WireInventorySource());
