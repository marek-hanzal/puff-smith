import {MutationEndpoint} from "@leight-core/server";
import {CellTransactionService, ICellTransaction, ICellTransactionCreate} from "@/puff-smith/service/cell";

export default MutationEndpoint<"Create", Omit<ICellTransactionCreate, "userId">, ICellTransaction>(async ({res, request, toUserId}) => {
	const cellTransactionService = CellTransactionService();
	try {
		return await cellTransactionService.handleCreate({
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
