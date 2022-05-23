import {AromaInventoryRepository} from "@/puff-smith/service/aroma/inventory/AromaInventoryRepository";
import {IAromaInventoryRepository} from "@/puff-smith/service/aroma/inventory/interface";
import {DeleteEndpoint} from "@leight-core/server";

export default DeleteEndpoint<"Delete", IAromaInventoryRepository>(AromaInventoryRepository());
