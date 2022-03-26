import {MutationEndpoint} from "@leight-core/server";
import {CellInventoryService, ICellInventory, ICellInventoryCreate} from "@/puff-smith/service/cell";

export default MutationEndpoint<"Create", Omit<ICellInventoryCreate, "userId">, ICellInventory>(async ({res, request, toUserId}) => {
	const cellTransactionService = CellInventoryService();
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
