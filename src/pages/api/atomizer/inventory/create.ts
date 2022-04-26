import {AtomizerInventoryService} from "@/puff-smith/service/atomizer/inventory/AtomizerInventoryService";
import {IAtomizerInventory, IAtomizerInventoryCreate} from "@/puff-smith/service/atomizer/inventory/interface";
import {handlePuffiesException} from "@/puff-smith/service/transaction/utils";
import {MutationEndpoint} from "@leight-core/server";

export default MutationEndpoint<"Create", Omit<IAtomizerInventoryCreate, "userId">, IAtomizerInventory>(async ({res, request, toUserId}) => handlePuffiesException(res, async () => AtomizerInventoryService().handleCreate({
	request: {
		...request,
		userId: toUserId(),
	}
})));
