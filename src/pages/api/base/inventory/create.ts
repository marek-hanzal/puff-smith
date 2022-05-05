import {ServiceCreate} from "@/puff-smith/service";
import {BaseInventoryService} from "@/puff-smith/service/base/inventory/BaseInventoryService";
import {IBaseInventory, IBaseInventoryCreate} from "@/puff-smith/service/base/inventory/interface";
import cache from "@/puff-smith/service/side-effect/cache";
import {handlePuffiesException} from "@/puff-smith/service/transaction/utils";
import {MutationEndpoint} from "@leight-core/server";

export default MutationEndpoint<"Create", IBaseInventoryCreate, IBaseInventory>(async (
		{
			res,
			request,
			toUserId,
		}
	) => handlePuffiesException(res, async () => {
		try {
			return await BaseInventoryService(ServiceCreate(toUserId())).handleCreate({request});
		} finally {
			cache.clear();
		}
	})
);
