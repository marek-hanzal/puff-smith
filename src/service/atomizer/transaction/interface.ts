import {AtomizerTransaction, Prisma} from "@prisma/client";
import {IQuery, IRepositoryService} from "@leight-core/api";
import {ITransaction} from "@/puff-smith/service/transaction";
import {IAtomizer} from "@/puff-smith/service/atomizer";
import {ParsedUrlQuery} from "querystring";

export interface IAtomizerTransactionCreate {
	userId: string;
	atomizerId: string;
}

export interface IAtomizerTransaction {
	id: string;
	atomizer: IAtomizer;
	transaction: ITransaction;
}

export interface IAtomizerTransactionQuery extends IQuery<Prisma.AtomizerWhereInput, Prisma.AtomizerOrderByWithRelationInput> {
}

export interface IAtomizerTransactionFetchProps {
	atomizerTransaction: IAtomizerTransaction;
}

export interface IAtomizerTransactionFetchQuery extends ParsedUrlQuery {
	atomizerTransactionId: string;
}

export type IAtomizerTransactionService = IRepositoryService<IAtomizerTransactionCreate, AtomizerTransaction, IAtomizerTransaction, IAtomizerTransactionQuery, IAtomizerTransactionFetchProps, IAtomizerTransactionFetchQuery>;
