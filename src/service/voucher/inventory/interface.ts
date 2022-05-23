import {IServiceCreate} from "@/puff-smith/service";
import {ITransaction} from "@/puff-smith/service/transaction/interface";
import {IVoucher} from "@/puff-smith/service/voucher/interface";
import {IQuery, ISource} from "@leight-core/api";
import {Prisma, VoucherInventory} from "@prisma/client";
import {ParsedUrlQuery} from "querystring";

export interface IVoucherInventoryCreate {
	code?: string;
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

export interface IVoucherInventorySourceCreate extends IServiceCreate {
}

export interface IVoucherInventorySource extends ISource<IVoucherInventoryCreate, VoucherInventory, IVoucherInventory, IVoucherInventoryQuery, IVoucherInventoryFetchProps, IVoucherInventoryFetchQuery> {
}
