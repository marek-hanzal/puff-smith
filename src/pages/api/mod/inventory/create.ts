import {IModInventory, IModInventoryCreate} from "@/puff-smith/service/mod/inventory/interface";
import {ModInventoryService} from "@/puff-smith/service/mod/inventory/ModInventoryService";
import {handlePuffiesException} from "@/puff-smith/service/transaction/utils";
import {MutationEndpoint} from "@leight-core/server";

export default MutationEndpoint<"Create", Omit<IModInventoryCreate, "userId">, IModInventory>(async ({res, request, toUserId}) => handlePuffiesException(res, async () => ModInventoryService().handleCreate({
	request: {
		...request,
		userId: toUserId(),
	}
})));
