import {ITransaction, IWithTransaction} from "@/puff-smith/service/transaction/interface";
import {IVoucher, IWithVoucher} from "@/puff-smith/service/voucher/interface";
import {IQuery, ISource} from "@leight-core/api";
import {Prisma, VoucherInventory} from "@prisma/client";

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

export type IVoucherInventoryEntity<T> = VoucherInventory & T;

export interface IVoucherInventorySource extends ISource<IVoucherInventoryCreate, IVoucherInventoryEntity<IWithVoucher & IWithTransaction>, IVoucherInventory, IVoucherInventoryQuery> {
}
