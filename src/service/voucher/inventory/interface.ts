import {Prisma, VoucherInventory} from "@prisma/client";
import {IQuery, IRepositoryService} from "@leight-core/api";
import {ITransaction} from "@/puff-smith/service/transaction";
import {IVoucher} from "@/puff-smith/service/voucher";
import {ParsedUrlQuery} from "querystring";

export interface IVoucherInventoryCreate {
	userId: string;
	voucherId: string;
}

export interface IVoucherInventory {
	id: string;
	voucher: IVoucher;
	transaction: ITransaction;
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
