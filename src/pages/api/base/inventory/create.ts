import {ofParams} from "@/puff-smith/service";
import {BaseInventoryRepository} from "@/puff-smith/service/base/inventory/BaseInventoryRepository";
import {IBaseInventory, IBaseInventoryCreate} from "@/puff-smith/service/base/inventory/interface";
import {handlePuffiesException} from "@/puff-smith/service/transaction/utils";
import {MutationEndpoint} from "@leight-core/server";

export default MutationEndpoint<"Create", IBaseInventoryCreate, IBaseInventory>(async params => handlePuffiesException(params, async () => BaseInventoryRepository(ofParams(params)).handleCreate(params)));
