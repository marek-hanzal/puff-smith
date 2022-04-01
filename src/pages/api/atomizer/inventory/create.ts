import {MutationEndpoint} from "@leight-core/server";
import {AtomizerInventoryService, IAtomizerInventory, IAtomizerInventoryCreate} from "@/puff-smith/service/atomizer";
import {handlePuffiesException} from "@/puff-smith/site/shared/transaction";

export default MutationEndpoint<"Create", Omit<IAtomizerInventoryCreate, "userId">, IAtomizerInventory>(async ({res, request, toUserId}) => handlePuffiesException(res, async () => AtomizerInventoryService().handleCreate({
	request: {
		...request,
		userId: await toUserId(),
	}
})));
