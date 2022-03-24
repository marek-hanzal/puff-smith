import {MutationEndpoint} from "@leight-core/server";
import {IVoucherTransaction, IVoucherTransactionCreate, VoucherTransactionService} from "@/puff-smith/service/voucher";

export default MutationEndpoint<"Create", Omit<IVoucherTransactionCreate, "userId">, IVoucherTransaction>(async ({res, request, toUserId}) => {
	try {
		return await VoucherTransactionService().handleCreate({
			request: {
				...request,
				userId: await toUserId(),
			}
		});
	} catch (e) {
		if ((e as Error).message?.includes("Too much puffies")) {
			res.status(409).end('Too much puffies');
			return;
		}
	}
});
