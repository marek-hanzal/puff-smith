import {IAtomizer, IWithAtomizerEntity} from "@/puff-smith/service/atomizer/interface";
import {ITransaction, IWithTransactionEntity} from "@/puff-smith/service/transaction/interface";
import {IQuery, ISource} from "@leight-core/api";
import {AtomizerInventory, Prisma} from "@prisma/client";

export interface IAtomizerInventoryCreate {
	atomizerId: string;
	code?: string;
}

export interface IAtomizerInventory {
	id: string;
	code: string;
	atomizer: IAtomizer;
	atomizerId: string;
	transaction: ITransaction;
	transactionId: string;
}

export interface IAtomizerInventoryQuery extends IQuery<Prisma.AtomizerInventoryWhereInput, Prisma.AtomizerInventoryOrderByWithRelationInput> {
}

export type IAtomizerInventoryEntity = AtomizerInventory & IWithAtomizerEntity & IWithTransactionEntity;

export interface IAtomizerInventorySource extends ISource<IAtomizerInventoryCreate, IAtomizerInventoryEntity, IAtomizerInventory, IAtomizerInventoryQuery> {
}
