import {ServiceCreate} from "@/puff-smith/service";
import {IVoucherInventory, IVoucherInventoryCreate} from "@/puff-smith/service/voucher/inventory/interface";
import {VoucherInventoryService} from "@/puff-smith/service/voucher/inventory/VoucherInventoryService";
import {MutationEndpoint} from "@leight-core/server";

export default MutationEndpoint<"Create", IVoucherInventoryCreate, IVoucherInventory>(async ({res, request, toUserId}) => {
	try {
		return await VoucherInventoryService(ServiceCreate(toUserId())).handleCreate({request});
	} catch (e) {
		if (e instanceof Error && e.message.includes("Too much puffies")) {
			res.status(409).end(e.message);
			return;
		}
	}
});
