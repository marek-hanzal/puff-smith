import {ofRequest} from "@/puff-smith/service";
import {BoosterInventoryRepository} from "@/puff-smith/service/booster/inventory/BoosterInventoryRepository";
import {IBoosterInventory, IBoosterInventoryCreate} from "@/puff-smith/service/booster/inventory/interface";
import {handlePuffiesException} from "@/puff-smith/service/transaction/utils";
import {MutationEndpoint} from "@leight-core/server";

export default MutationEndpoint<"Create", IBoosterInventoryCreate, IBoosterInventory>(async params => handlePuffiesException(params, async () => BoosterInventoryRepository(ofRequest(params)).handleCreate(params)));
