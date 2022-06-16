import {IVoucherInventorySource} from "@/puff-smith/service/voucher/inventory/interface";
import {VoucherInventorySource} from "@/puff-smith/service/voucher/inventory/VoucherInventorySource";
import {CountEndpoint} from "@leight-core/server";

export default CountEndpoint<"VoucherInventoryCount", IVoucherInventorySource>(VoucherInventorySource);
