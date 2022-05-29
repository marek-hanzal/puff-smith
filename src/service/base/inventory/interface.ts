import {IBase, IWithBaseEntity} from "@/puff-smith/service/base/interface";
import {ITransaction, IWithTransaction} from "@/puff-smith/service/transaction/interface";
import {IWithVendor} from "@/puff-smith/service/vendor/interface";
import {IQuery, ISource, IWithFulltext} from "@leight-core/api";
import {BaseInventory, Prisma} from "@prisma/client";

export interface IBaseInventoryCreate {
	baseId: string;
	code?: string;
}

export interface IBaseInventory {
	id: string;
	code: string;
	base: IBase;
	baseId: string;
	transaction: ITransaction;
	transactionId: string;
}

export interface IBaseInventoryQuery extends IQuery<Prisma.BaseInventoryWhereInput & IWithFulltext, Prisma.BaseInventoryOrderByWithRelationInput> {
}

export type IBaseInventoryEntity<T = void> = T extends void ? BaseInventory : BaseInventory & T;

export interface IBaseInventorySource extends ISource<IBaseInventoryCreate, IBaseInventoryEntity<IWithBaseEntity<IWithVendor> & IWithTransaction>, IBaseInventory, IBaseInventoryQuery> {
}
