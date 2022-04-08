import {ServerBootstrap} from "@/puff-smith/service/bootstrap";
import {IModInventory, IModInventoryCreate, ModInventoryService} from "@/puff-smith/service/mod";
import {handlePuffiesException} from "@/puff-smith/service/transaction";
import {MutationEndpoint} from "@leight-core/server";

ServerBootstrap();

export default MutationEndpoint<"Create", Omit<IModInventoryCreate, "userId">, IModInventory>(async ({res, request, toUserId}) => handlePuffiesException(res, async () => ModInventoryService().handleCreate({
	request: {
		...request,
		userId: toUserId(),
	}
})));
