import {ofParams} from "@/puff-smith/service";
import {IVoucherInventory, IVoucherInventoryCreate} from "@/puff-smith/service/voucher/inventory/interface";
import {VoucherInventoryRepository} from "@/puff-smith/service/voucher/inventory/VoucherInventoryRepository";
import {MutationEndpoint} from "@leight-core/server";

export default MutationEndpoint<"Create", IVoucherInventoryCreate, IVoucherInventory>(async params => {
	try {
		return await VoucherInventoryRepository(ofParams(params)).handleCreate(params);
	} catch (e) {
		if (e instanceof Error && e.message.includes("Too much puffies")) {
			params.res.status(409).end(e.message);
			return;
		}
	}
});
