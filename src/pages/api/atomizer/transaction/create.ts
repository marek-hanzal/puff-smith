import {MutationEndpoint} from "@leight-core/server";
import {atomizerTransactionCreate, atomizerTransactionMapper, IAtomizerTransaction, IAtomizerTransactionCreate} from "@/puff-smith/service/atomizer";

export default MutationEndpoint<"Create", Omit<IAtomizerTransactionCreate, "userId">, IAtomizerTransaction>(async ({res, request, toUserId}) => {
	try {
		return atomizerTransactionMapper(await atomizerTransactionCreate({
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
