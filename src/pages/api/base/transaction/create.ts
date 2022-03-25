import {MutationEndpoint} from "@leight-core/server";
import {BaseTransactionService, IBaseTransaction, IBaseTransactionCreate} from "@/puff-smith/service/base";

export default MutationEndpoint<"Create", Omit<IBaseTransactionCreate, "userId">, IBaseTransaction>(async ({res, request, toUserId}) => {
	const baseTransactionService = BaseTransactionService();
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
