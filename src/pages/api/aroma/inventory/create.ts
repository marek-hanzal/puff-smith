import {ofParams} from "@/puff-smith/service";
import {AromaInventoryRepository} from "@/puff-smith/service/aroma/inventory/AromaInventoryRepository";
import {IAromaInventory, IAromaInventoryCreate} from "@/puff-smith/service/aroma/inventory/interface";
import {handlePuffiesException} from "@/puff-smith/service/transaction/utils";
import {MutationEndpoint} from "@leight-core/server";

export default MutationEndpoint<"Create", IAromaInventoryCreate, IAromaInventory>(async params => handlePuffiesException(params, async () => AromaInventoryRepository(ofParams(params)).handleCreate(params)));
