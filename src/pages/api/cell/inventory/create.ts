import {ofRequest} from "@/puff-smith/service";
import {CellInventoryRepository} from "@/puff-smith/service/cell/inventory/CellInventoryRepository";
import {ICellInventory, ICellInventoryCreate} from "@/puff-smith/service/cell/inventory/interface";
import {handlePuffiesException} from "@/puff-smith/service/transaction/utils";
import {MutationEndpoint} from "@leight-core/server";

export default MutationEndpoint<"Create", ICellInventoryCreate, ICellInventory>(async params => handlePuffiesException(params, async () => CellInventoryRepository(ofRequest(params)).handleCreate(params)));
