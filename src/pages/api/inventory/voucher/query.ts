import {IVoucherInventorySource} from "@/puff-smith/service/voucher/inventory/interface";
import {VoucherInventorySource} from "@/puff-smith/service/voucher/inventory/VoucherInventorySource";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"VoucherInventory", IVoucherInventorySource>(VoucherInventorySource());
