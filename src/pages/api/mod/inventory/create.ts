import {MutationEndpoint} from "@leight-core/server";
import {IModInventory, IModInventoryCreate, ModInventoryService} from "@/puff-smith/service/mod";

export default MutationEndpoint<"Create", Omit<IModInventoryCreate, "userId">, IModInventory>(async ({res, request, toUserId}) => {
	const modTransactionService = ModInventoryService();
	try {
		return await modTransactionService.handleCreate({
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
