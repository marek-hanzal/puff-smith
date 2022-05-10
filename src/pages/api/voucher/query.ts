import {IVoucher, IVoucherQuery} from "@/puff-smith/service/voucher/interface";
import {VoucherService} from "@/puff-smith/service/voucher/VoucherService";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"Vouchers", IVoucherQuery, IVoucher>(VoucherService().handleQuery);
