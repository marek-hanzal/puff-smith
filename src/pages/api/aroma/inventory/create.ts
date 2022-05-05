import {ServiceCreate} from "@/puff-smith/service";
import {AromaInventoryService} from "@/puff-smith/service/aroma/inventory/AromaInventoryService";
import {IAromaInventory, IAromaInventoryCreate} from "@/puff-smith/service/aroma/inventory/interface";
import cache from "@/puff-smith/service/side-effect/cache";
import {handlePuffiesException} from "@/puff-smith/service/transaction/utils";
import {MutationEndpoint} from "@leight-core/server";

export default MutationEndpoint<"Create", IAromaInventoryCreate, IAromaInventory>(async (
		{
			res,
			request,
			toUserId,
		}
	) => handlePuffiesException(res, async () => {
		try {
			return await AromaInventoryService(ServiceCreate(toUserId())).handleCreate({request});
		} finally {
			cache.clear();
		}
	})
);
