import {ofRequest} from "@/puff-smith/service";
import {CottonInventoryRepository} from "@/puff-smith/service/cotton/inventory/CottonInventoryRepository";
import {ICottonInventory, ICottonInventoryCreate} from "@/puff-smith/service/cotton/inventory/interface";
import {handlePuffiesException} from "@/puff-smith/service/transaction/utils";
import {MutationEndpoint} from "@leight-core/server";

export default MutationEndpoint<"Create", ICottonInventoryCreate, ICottonInventory>(async params => handlePuffiesException(params, async () => CottonInventoryRepository(ofRequest(params)).handleCreate(params)),);
