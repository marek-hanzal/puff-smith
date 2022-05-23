import {AromaInventoryRepository} from "@/puff-smith/service/aroma/inventory/AromaInventoryRepository";
import {IAromaInventoryRepository} from "@/puff-smith/service/aroma/inventory/interface";
import {CreateEndpoint} from "@leight-core/server";

export default CreateEndpoint<"Create", IAromaInventoryRepository>(AromaInventoryRepository());
