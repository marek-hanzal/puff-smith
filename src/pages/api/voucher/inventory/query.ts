import {ofParams} from "@/puff-smith/service";
import {IVoucherInventory, IVoucherInventoryQuery} from "@/puff-smith/service/voucher/inventory/interface";
import {VoucherInventoryRepository} from "@/puff-smith/service/voucher/inventory/VoucherInventoryRepository";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"VoucherInventory", IVoucherInventoryQuery, IVoucherInventory>(async params => VoucherInventoryRepository(ofParams(params)).handleQuery(params));
