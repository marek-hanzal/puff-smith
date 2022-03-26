import {MutationEndpoint} from "@leight-core/server";
import {IVoucherInventory, IVoucherInventoryCreate, VoucherInventoryService} from "@/puff-smith/service/voucher";

export default MutationEndpoint<"Create", Omit<IVoucherInventoryCreate, "userId">, IVoucherInventory>(async ({res, request, toUserId}) => {
	try {
		return await VoucherInventoryService().handleCreate({
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
