import {QueryEndpoint} from "@leight-core/server";
import {IVoucherInventory, IVoucherInventoryQuery, VoucherInventoryService} from "@/puff-smith/service/voucher";

export default QueryEndpoint<"VouchersInventory", IVoucherInventoryQuery, IVoucherInventory>(VoucherInventoryService().handleQuery);
