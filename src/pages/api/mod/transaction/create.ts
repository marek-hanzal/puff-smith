import {MutationEndpoint} from "@leight-core/server";
import {IModTransaction, IModTransactionCreate, ModTransactionService} from "@/puff-smith/service/mod";

export default MutationEndpoint<"Create", Omit<IModTransactionCreate, "userId">, IModTransaction>(async ({res, request, toUserId}) => {
	const modTransactionService = ModTransactionService();
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
