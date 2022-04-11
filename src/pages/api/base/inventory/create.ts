import {BaseInventoryService, IBaseInventory, IBaseInventoryCreate} from "@/puff-smith/service/base";
import {handlePuffiesException} from "@/puff-smith/service/transaction";
import {MutationEndpoint} from "@leight-core/server";

export default MutationEndpoint<"Create", Omit<IBaseInventoryCreate, "userId">, IBaseInventory>(async ({res, request, toUserId}) => handlePuffiesException(res, async () => BaseInventoryService().handleCreate({
	request: {
		...request,
		userId: toUserId(),
	}
})));
