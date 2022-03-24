import {MutationEndpoint} from "@leight-core/server";
import {CottonTransactionService, ICottonTransaction, ICottonTransactionCreate} from "@/puff-smith/service/cotton";

export default MutationEndpoint<"Create", Omit<ICottonTransactionCreate, "userId">, ICottonTransaction>(async ({res, request, toUserId}) => {
	const cottonTransactionService = CottonTransactionService();
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
