import {ServiceCreate} from "@/puff-smith/service";
import {IModInventory, IModInventoryCreate} from "@/puff-smith/service/mod/inventory/interface";
import {ModInventoryService} from "@/puff-smith/service/mod/inventory/ModInventoryService";
import cache from "@/puff-smith/service/side-effect/cache";
import {handlePuffiesException} from "@/puff-smith/service/transaction/utils";
import {MutationEndpoint} from "@leight-core/server";

export default MutationEndpoint<"Create", IModInventoryCreate, IModInventory>(async (
		{
			res,
			request,
			toUserId,
		}
	) => handlePuffiesException(res, async () => {
		try {
			return await ModInventoryService(ServiceCreate(toUserId())).handleCreate({request});
		} finally {
			cache.clear();
		}
	})
);
