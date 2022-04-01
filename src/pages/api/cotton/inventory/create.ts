import {MutationEndpoint} from "@leight-core/server";
import {CottonInventoryService, ICottonInventory, ICottonInventoryCreate} from "@/puff-smith/service/cotton";
import {handlePuffiesException} from "@/puff-smith/site/shared/transaction";

export default MutationEndpoint<"Create", Omit<ICottonInventoryCreate, "userId">, ICottonInventory>(async ({res, request, toUserId}) => handlePuffiesException(res, async () => CottonInventoryService().handleCreate({
	request: {
		...request,
		userId: await toUserId(),
	}
})));
