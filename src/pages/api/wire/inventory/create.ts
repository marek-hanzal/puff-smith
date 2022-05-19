import {ofRequest} from "@/puff-smith/service";
import {handlePuffiesException} from "@/puff-smith/service/transaction/utils";
import {IWireInventory, IWireInventoryCreate} from "@/puff-smith/service/wire/inventory/interface";
import {WireInventoryRepository} from "@/puff-smith/service/wire/inventory/WireInventoryRepository";
import {MutationEndpoint} from "@leight-core/server";

export default MutationEndpoint<"Create", IWireInventoryCreate, IWireInventory>(async params => handlePuffiesException(params, async () => WireInventoryRepository(ofRequest(params)).handleCreate(params)));
