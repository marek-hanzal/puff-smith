import {MutationEndpoint} from "@leight-core/server";
import {AromaTransactionService, IAromaTransaction, IAromaTransactionCreate} from "@/puff-smith/service/aroma";

export default MutationEndpoint<"Create", Omit<IAromaTransactionCreate, "userId">, IAromaTransaction>(async ({res, request, toUserId}) => {
	const aromaTransactionService = AromaTransactionService();
	try {
		return await aromaTransactionService.handleCreate({
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
