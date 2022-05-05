import {ServiceCreate} from "@/puff-smith/service";
import {AtomizerInventoryService} from "@/puff-smith/service/atomizer/inventory/AtomizerInventoryService";
import {IAtomizerInventory, IAtomizerInventoryCreate} from "@/puff-smith/service/atomizer/inventory/interface";
import cache from "@/puff-smith/service/side-effect/cache";
import {handlePuffiesException} from "@/puff-smith/service/transaction/utils";
import {MutationEndpoint} from "@leight-core/server";

export default MutationEndpoint<"Create", IAtomizerInventoryCreate, IAtomizerInventory>(async (
		{
			res,
			request,
			toUserId,
		}
	) => handlePuffiesException(res, async () => {
		try {
			return await AtomizerInventoryService(ServiceCreate(toUserId())).handleCreate({request});
		} finally {
			cache.clear();
		}
	})
);
