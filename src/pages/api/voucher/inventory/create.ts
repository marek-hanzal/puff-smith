import {IVoucherInventorySource} from "@/puff-smith/service/voucher/inventory/interface";
import {VoucherInventorySource} from "@/puff-smith/service/voucher/inventory/VoucherInventorySource";
import {CreateEndpoint} from "@leight-core/server";

export default CreateEndpoint<"Create", IVoucherInventorySource>(VoucherInventorySource());
