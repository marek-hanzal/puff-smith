import {IVoucher, IVoucherQuery, VoucherService} from "@/puff-smith/service/voucher";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"Vouchers", IVoucherQuery, IVoucher>(VoucherService().handleQuery);
