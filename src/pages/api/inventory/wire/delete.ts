import {IWireInventorySource} from "@/puff-smith/service/wire/inventory/interface";
import {WireInventorySource} from "@/puff-smith/service/wire/inventory/WireInventorySource";
import {DeleteEndpoint} from "@leight-core/server";

export default DeleteEndpoint<"Delete", IWireInventorySource>(WireInventorySource);
