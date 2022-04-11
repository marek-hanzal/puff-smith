import {CottonInventoryService, ICottonInventory, ICottonInventoryCreate} from "@/puff-smith/service/cotton";
import {handlePuffiesException} from "@/puff-smith/service/transaction";
import {MutationEndpoint} from "@leight-core/server";

export default MutationEndpoint<"Create", Omit<ICottonInventoryCreate, "userId">, ICottonInventory>(async ({res, request, toUserId}) => handlePuffiesException(res, async () => CottonInventoryService().handleCreate({
	request: {
		...request,
		userId: toUserId(),
	}
})));
