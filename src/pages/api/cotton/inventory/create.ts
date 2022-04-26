import {CottonInventoryService} from "@/puff-smith/service/cotton/inventory/CottonInventoryService";
import {ICottonInventory, ICottonInventoryCreate} from "@/puff-smith/service/cotton/inventory/interface";
import {handlePuffiesException} from "@/puff-smith/service/transaction/utils";
import {MutationEndpoint} from "@leight-core/server";

export default MutationEndpoint<"Create", Omit<ICottonInventoryCreate, "userId">, ICottonInventory>(async ({res, request, toUserId}) => handlePuffiesException(res, async () => CottonInventoryService().handleCreate({
	request: {
		...request,
		userId: toUserId(),
	}
})));
