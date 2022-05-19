import {ofRequest} from "@/puff-smith/service";
import {IModInventory, IModInventoryCreate} from "@/puff-smith/service/mod/inventory/interface";
import {ModInventoryRepository} from "@/puff-smith/service/mod/inventory/ModInventoryRepository";
import {handlePuffiesException} from "@/puff-smith/service/transaction/utils";
import {MutationEndpoint} from "@leight-core/server";

export default MutationEndpoint<"Create", IModInventoryCreate, IModInventory>(async params => handlePuffiesException(params, async () => ModInventoryRepository(ofRequest(params)).handleCreate(params)));
