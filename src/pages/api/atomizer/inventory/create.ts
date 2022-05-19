import {ofParams} from "@/puff-smith/service";
import {AtomizerInventoryRepository} from "@/puff-smith/service/atomizer/inventory/AtomizerInventoryRepository";
import {IAtomizerInventory, IAtomizerInventoryCreate} from "@/puff-smith/service/atomizer/inventory/interface";
import {handlePuffiesException} from "@/puff-smith/service/transaction/utils";
import {MutationEndpoint} from "@leight-core/server";

export default MutationEndpoint<"Create", IAtomizerInventoryCreate, IAtomizerInventory>(async params => handlePuffiesException(params, async () => AtomizerInventoryRepository(ofParams(params)).handleCreate(params)));
