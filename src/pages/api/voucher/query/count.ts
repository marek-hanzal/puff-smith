import {IVoucherSource} from "@/puff-smith/service/voucher/interface";
import {VoucherSource} from "@/puff-smith/service/voucher/VoucherSource";
import {CountEndpoint} from "@leight-core/server";

export default CountEndpoint<"VoucherCount", IVoucherSource>(VoucherSource());
