import {IVoucherInventory, IVoucherInventoryCreate} from "@/puff-smith/service/voucher/inventory/interface";
import {VoucherInventoryService} from "@/puff-smith/service/voucher/inventory/VoucherInventoryService";
import {MutationEndpoint} from "@leight-core/server";

export default MutationEndpoint<"Create", Omit<IVoucherInventoryCreate, "userId">, IVoucherInventory>(async ({res, request, toUserId}) => {
	try {
		return await VoucherInventoryService().handleCreate({
			request: {
				...request,
				userId: toUserId(),
			}
		});
	} catch (e) {
		if ((e as Error).message?.includes("Too much puffies")) {
			res.status(409).end("Too much puffies");
			return;
		}
	}
});
