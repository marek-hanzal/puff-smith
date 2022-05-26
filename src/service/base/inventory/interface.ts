import {IBase, IWithBaseEntity} from "@/puff-smith/service/base/interface";
import {ITransaction, IWithTransaction} from "@/puff-smith/service/transaction/interface";
import {IQuery, ISource} from "@leight-core/api";
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

export interface IBaseInventoryQuery extends IQuery<Prisma.BaseInventoryWhereInput, Prisma.BaseInventoryOrderByWithRelationInput> {
}

export type IBaseInventoryEntity<T = void> = T extends void ? BaseInventory : BaseInventory & T;

export interface IBaseInventorySource extends ISource<IBaseInventoryCreate, IBaseInventoryEntity<IWithBaseEntity & IWithTransaction>, IBaseInventory, IBaseInventoryQuery> {
}
