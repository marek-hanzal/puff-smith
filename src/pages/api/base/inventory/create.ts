import {BaseInventoryService} from "@/puff-smith/service/base/inventory/BaseInventoryService";
import {IBaseInventory, IBaseInventoryCreate} from "@/puff-smith/service/base/inventory/interface";
import {handlePuffiesException} from "@/puff-smith/service/transaction/utils";
import {MutationEndpoint} from "@leight-core/server";

export default MutationEndpoint<"Create", Omit<IBaseInventoryCreate, "userId">, IBaseInventory>(async ({res, request, toUserId}) => handlePuffiesException(res, async () => BaseInventoryService().handleCreate({
	request: {
		...request,
		userId: toUserId(),
	}
})));
