import {IVoucherSource} from "@/puff-smith/service/voucher/interface";
import {VoucherSource} from "@/puff-smith/service/voucher/VoucherSource";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"Voucher", IVoucherSource>({
	source: VoucherSource,
});
