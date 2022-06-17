import {AromaInventorySource} from "@/puff-smith/service/aroma/inventory/AromaInventorySource";
import {IAromaInventorySource} from "@/puff-smith/service/aroma/inventory/interface";
import {CreateEndpoint} from "@leight-core/server";

export default CreateEndpoint<"Create", IAromaInventorySource>(AromaInventorySource);
