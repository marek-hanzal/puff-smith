import {MutationEndpoint} from "@leight-core/server";
import {CottonInventoryService, ICottonInventory, ICottonInventoryCreate} from "@/puff-smith/service/cotton";

export default MutationEndpoint<"Create", Omit<ICottonInventoryCreate, "userId">, ICottonInventory>(async ({res, request, toUserId}) => {
	const cottonTransactionService = CottonInventoryService();
	try {
		return await cottonTransactionService.handleCreate({
			request: {
				...request,
				userId: await toUserId(),
			}
		});
	} catch (e) {
		if ((e as Error).message?.includes("Not enough puffies")) {
			res.status(409).end('Not enough puffies');
			return;
		}
	}
});
