import {AtomizerInventoryService, IAtomizerInventory, IAtomizerInventoryCreate} from "@/puff-smith/service/atomizer";
import {ServerBootstrap} from "@/puff-smith/service/bootstrap";
import {handlePuffiesException} from "@/puff-smith/service/transaction";
import {MutationEndpoint} from "@leight-core/server";

ServerBootstrap();

export default MutationEndpoint<"Create", Omit<IAtomizerInventoryCreate, "userId">, IAtomizerInventory>(async ({res, request, toUserId}) => handlePuffiesException(res, async () => AtomizerInventoryService().handleCreate({
	request: {
		...request,
		userId: toUserId(),
	}
})));
