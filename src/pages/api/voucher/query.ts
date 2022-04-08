import {ServerBootstrap} from "@/puff-smith/service/bootstrap";
import {IVoucher, IVoucherQuery, VoucherService} from "@/puff-smith/service/voucher";
import {QueryEndpoint} from "@leight-core/server";

ServerBootstrap();

export default QueryEndpoint<"Vouchers", IVoucherQuery, IVoucher>(VoucherService().handleQuery);
