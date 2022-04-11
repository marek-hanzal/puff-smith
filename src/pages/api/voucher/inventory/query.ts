import {IVoucherInventory, IVoucherInventoryQuery, VoucherInventoryService} from "@/puff-smith/service/voucher";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"VouchersInventory", IVoucherInventoryQuery, IVoucherInventory>(VoucherInventoryService().handleQuery);
