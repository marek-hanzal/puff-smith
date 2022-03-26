import {MutationEndpoint} from "@leight-core/server";
import {BoosterInventoryService, IBoosterInventory, IBoosterInventoryCreate} from "@/puff-smith/service/booster";

export default MutationEndpoint<"Create", Omit<IBoosterInventoryCreate, "userId">, IBoosterInventory>(async ({res, request, toUserId}) => {
	const boosterTransactionService = BoosterInventoryService();
	try {
		return await boosterTransactionService.handleCreate({
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
