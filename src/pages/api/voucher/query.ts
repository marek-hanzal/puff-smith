import {QueryEndpoint} from "@leight-core/server";
import {IVoucher, IVoucherQuery, VoucherService} from "@/puff-smith/service/voucher";

export default QueryEndpoint<"Vouchers", IVoucherQuery, IVoucher>(VoucherService().handleQuery);
