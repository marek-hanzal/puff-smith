import {AtomizerTransaction, Prisma} from "@prisma/client";
import {IQuery, IRepositoryServiceFactory} from "@leight-core/api";
import {ITransaction} from "@/puff-smith/service/transaction";
import {IAtomizer} from "@/puff-smith/service/atomizer";

export interface IAtomizerTransactionCreate {
	userId: string;
	atomizerId: string;
}

export interface IAtomizerTransaction {
	id: string;
	atomizer: IAtomizer;
	transaction: ITransaction;
}

export type IAtomizerTransactionFilter = Prisma.AtomizerWhereInput;
export type IAtomizerTransactionOrderBy = Prisma.AtomizerOrderByWithRelationInput;

export interface IAtomizerTransactionQuery extends IQuery<IAtomizerTransactionFilter, IAtomizerTransactionOrderBy> {
}

export type IAtomizerTransactionServiceFactory = IRepositoryServiceFactory<IAtomizerTransactionCreate, AtomizerTransaction, IAtomizerTransaction, IAtomizerTransactionQuery>;
