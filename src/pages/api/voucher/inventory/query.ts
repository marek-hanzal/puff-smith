import cache from "@/puff-smith/service/side-effect/cache";
import {IVoucherInventory, IVoucherInventoryQuery} from "@/puff-smith/service/voucher/inventory/interface";
import {VoucherInventoryService} from "@/puff-smith/service/voucher/inventory/VoucherInventoryService";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"VouchersInventory", IVoucherInventoryQuery, IVoucherInventory>(VoucherInventoryService().handleQuery, cache);
