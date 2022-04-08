import {BoosterInventoryService, IBoosterInventory, IBoosterInventoryCreate} from "@/puff-smith/service/booster";
import {ServerBootstrap} from "@/puff-smith/service/bootstrap";
import {handlePuffiesException} from "@/puff-smith/service/transaction";
import {MutationEndpoint} from "@leight-core/server";

ServerBootstrap();

export default MutationEndpoint<"Create", Omit<IBoosterInventoryCreate, "userId">, IBoosterInventory>(async ({res, request, toUserId}) => handlePuffiesException(res, async () => BoosterInventoryService().handleCreate({
	request: {
		...request,
		userId: toUserId(),
	}
})));
