import {AromaInventoryService, IAromaInventory, IAromaInventoryCreate} from "@/puff-smith/service/aroma";
import {ServerBootstrap} from "@/puff-smith/service/bootstrap";
import {handlePuffiesException} from "@/puff-smith/service/transaction";
import {MutationEndpoint} from "@leight-core/server";

ServerBootstrap();

export default MutationEndpoint<"Create", Omit<IAromaInventoryCreate, "userId">, IAromaInventory>(async ({res, request, toUserId}) => handlePuffiesException(res, async () => AromaInventoryService().handleCreate({
	request: {
		...request,
		userId: toUserId(),
	}
})));
