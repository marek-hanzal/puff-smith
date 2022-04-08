import {ServerBootstrap} from "@/puff-smith/service/bootstrap";
import {IVoucherInventory, IVoucherInventoryQuery, VoucherInventoryService} from "@/puff-smith/service/voucher";
import {QueryEndpoint} from "@leight-core/server";

ServerBootstrap();

export default QueryEndpoint<"VouchersInventory", IVoucherInventoryQuery, IVoucherInventory>(VoucherInventoryService().handleQuery);
