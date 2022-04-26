import {BoosterInventoryService} from "@/puff-smith/service/booster/inventory/BoosterInventoryService";
import {IBoosterInventory, IBoosterInventoryCreate} from "@/puff-smith/service/booster/inventory/interface";
import {handlePuffiesException} from "@/puff-smith/service/transaction/utils";
import {MutationEndpoint} from "@leight-core/server";

export default MutationEndpoint<"Create", Omit<IBoosterInventoryCreate, "userId">, IBoosterInventory>(async ({res, request, toUserId}) => handlePuffiesException(res, async () => BoosterInventoryService().handleCreate({
	request: {
		...request,
		userId: toUserId(),
	}
})));
