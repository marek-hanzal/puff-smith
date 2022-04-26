import {ITransaction} from "@/puff-smith/service/transaction/interface";
import {IVoucher} from "@/puff-smith/service/voucher/interface";
import {IQuery, IRepositoryService} from "@leight-core/api";
import {Prisma, VoucherInventory} from "@prisma/client";
import {ParsedUrlQuery} from "querystring";

export interface IVoucherInventoryCreate {
	code?: string;
	userId: string;
	voucherId: string;
}

export interface IVoucherInventory {
	id: string;
	voucher: IVoucher;
	voucherId: string;
	transaction: ITransaction;
	transactionId: string;
}

export interface IVoucherInventoryQuery extends IQuery<Prisma.VoucherInventoryWhereInput, Prisma.VoucherInventoryOrderByWithRelationInput> {
}

export interface IVoucherInventoryFetchProps {
	voucherTransaction: IVoucherInventory;
}

export interface IVoucherInventoryFetchQuery extends ParsedUrlQuery {
	voucherTransactionId: string;
}

export type IVoucherInventoryService = IRepositoryService<IVoucherInventoryCreate, VoucherInventory, IVoucherInventory, IVoucherInventoryQuery, IVoucherInventoryFetchProps, IVoucherInventoryFetchQuery>;
