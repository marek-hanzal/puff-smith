import {ServiceCreate} from "@/puff-smith/service";
import {BoosterInventoryService} from "@/puff-smith/service/booster/inventory/BoosterInventoryService";
import {IBoosterInventory, IBoosterInventoryCreate} from "@/puff-smith/service/booster/inventory/interface";
import cache from "@/puff-smith/service/side-effect/cache";
import {handlePuffiesException} from "@/puff-smith/service/transaction/utils";
import {MutationEndpoint} from "@leight-core/server";

export default MutationEndpoint<"Create", IBoosterInventoryCreate, IBoosterInventory>(async (
		{
			res,
			request,
			toUserId,
		}
	) => handlePuffiesException(res, async () => {
		try {
			return await BoosterInventoryService(ServiceCreate(toUserId())).handleCreate({request});
		} finally {
			cache.clear();
		}
	})
);
