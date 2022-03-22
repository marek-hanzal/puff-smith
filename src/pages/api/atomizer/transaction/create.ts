import {MutationEndpoint} from "@leight-core/server";
import {AtomizerTransactionService, IAtomizerTransaction, IAtomizerTransactionCreate} from "@/puff-smith/service/atomizer";

export default MutationEndpoint<"Create", Omit<IAtomizerTransactionCreate, "userId">, IAtomizerTransaction>(async ({res, request, toUserId}) => {
	const atomizerTransactionService = AtomizerTransactionService();
	try {
		return atomizerTransactionService.map(await atomizerTransactionService.create({
			...request,
			userId: await toUserId(),
		}));
	} catch (e) {
		if ((e as Error).message?.includes("Not enough puffies")) {
			res.status(409).end('Not enough puffies');
			return;
		}
	}
});
