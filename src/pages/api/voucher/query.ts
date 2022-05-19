import {IVoucher, IVoucherQuery} from "@/puff-smith/service/voucher/interface";
import {VoucherRepository} from "@/puff-smith/service/voucher/VoucherRepository";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"Voucher", IVoucherQuery, IVoucher>(VoucherRepository().handleQuery);
