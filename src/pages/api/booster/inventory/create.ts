import {MutationEndpoint} from "@leight-core/server";
import {BoosterInventoryService, IBoosterInventory, IBoosterInventoryCreate} from "@/puff-smith/service/booster";
import {handlePuffiesException} from "@/puff-smith/service/transaction";

export default MutationEndpoint<"Create", Omit<IBoosterInventoryCreate, "userId">, IBoosterInventory>(async ({res, request, toUserId}) => handlePuffiesException(res, async () => BoosterInventoryService().handleCreate({
	request: {
		...request,
		userId: await toUserId(),
	}
})));
