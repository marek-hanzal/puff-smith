import {MutationEndpoint} from "@leight-core/server";
import {BoosterTransactionService, IBoosterTransaction, IBoosterTransactionCreate} from "@/puff-smith/service/booster";

export default MutationEndpoint<"Create", Omit<IBoosterTransactionCreate, "userId">, IBoosterTransaction>(async ({res, request, toUserId}) => {
	const boosterTransactionService = BoosterTransactionService();
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
