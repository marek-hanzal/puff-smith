import {Prisma, VoucherTransaction} from "@prisma/client";
import {IQuery, IRepositoryService} from "@leight-core/api";
import {ITransaction} from "@/puff-smith/service/transaction";
import {IVoucher} from "@/puff-smith/service/voucher";
import {ParsedUrlQuery} from "querystring";

export interface IVoucherTransactionCreate {
	userId: string;
	voucherId: string;
}

export interface IVoucherTransaction {
	id: string;
	voucher: IVoucher;
	transaction: ITransaction;
}

export interface IVoucherTransactionQuery extends IQuery<Prisma.VoucherWhereInput, Prisma.VoucherOrderByWithRelationInput> {
}

export interface IVoucherTransactionFetchProps {
	voucherTransaction: IVoucherTransaction;
}

export interface IVoucherTransactionFetchQuery extends ParsedUrlQuery {
	voucherTransactionId: string;
}

export type IVoucherTransactionService = IRepositoryService<IVoucherTransactionCreate, VoucherTransaction, IVoucherTransaction, IVoucherTransactionQuery, IVoucherTransactionFetchProps, IVoucherTransactionFetchQuery>;
