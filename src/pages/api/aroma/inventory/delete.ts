import {AromaInventorySource} from "@/puff-smith/service/aroma/inventory/AromaInventorySource";
import {IAromaInventorySource} from "@/puff-smith/service/aroma/inventory/interface";
import {DeleteEndpoint} from "@leight-core/server";

export default DeleteEndpoint<"Delete", IAromaInventorySource>(AromaInventorySource());
