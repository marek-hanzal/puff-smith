import {MutationEndpoint} from "@leight-core/server";
import {AtomizerInventoryService, IAtomizerInventory, IAtomizerInventoryCreate} from "@/puff-smith/service/atomizer";

export default MutationEndpoint<"Create", Omit<IAtomizerInventoryCreate, "userId">, IAtomizerInventory>(async ({res, request, toUserId}) => {
	const atomizerTransactionService = AtomizerInventoryService();
	try {
		return await atomizerTransactionService.handleCreate({
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
