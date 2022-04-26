import {AromaInventoryService} from "@/puff-smith/service/aroma/inventory/AromaInventoryService";
import {IAromaInventory, IAromaInventoryCreate} from "@/puff-smith/service/aroma/inventory/interface";
import {handlePuffiesException} from "@/puff-smith/service/transaction/utils";
import {MutationEndpoint} from "@leight-core/server";

export default MutationEndpoint<"Create", Omit<IAromaInventoryCreate, "userId">, IAromaInventory>(async ({res, request, toUserId}) => handlePuffiesException(res, async () => AromaInventoryService().handleCreate({
	request: {
		...request,
		userId: toUserId(),
	}
})));
