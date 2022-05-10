import {ServiceCreate} from "@/puff-smith/service";
import {AromaInventoryService} from "@/puff-smith/service/aroma/inventory/AromaInventoryService";
import {IAromaInventory, IAromaInventoryCreate} from "@/puff-smith/service/aroma/inventory/interface";
import {handlePuffiesException} from "@/puff-smith/service/transaction/utils";
import {MutationEndpoint} from "@leight-core/server";

export default MutationEndpoint<"Create", IAromaInventoryCreate, IAromaInventory>(async (
		{
			res,
			request,
			toUserId,
		}
	) => handlePuffiesException(res, async () => AromaInventoryService(ServiceCreate(toUserId())).handleCreate({request}))
);
