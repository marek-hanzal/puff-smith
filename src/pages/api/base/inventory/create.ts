import {MutationEndpoint} from "@leight-core/server";
import {BaseInventoryService, IBaseInventory, IBaseInventoryCreate} from "@/puff-smith/service/base";

export default MutationEndpoint<"Create", Omit<IBaseInventoryCreate, "userId">, IBaseInventory>(async ({res, request, toUserId}) => {
	const baseTransactionService = BaseInventoryService();
	try {
		return await baseTransactionService.handleCreate({
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
