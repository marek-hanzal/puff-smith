import {BaseTransaction, Prisma} from "@prisma/client";
import {IQuery, IRepositoryService} from "@leight-core/api";
import {ITransaction} from "@/puff-smith/service/transaction";
import {IBase} from "@/puff-smith/service/base";
import {ParsedUrlQuery} from "querystring";

export interface IBaseTransactionCreate {
	userId: string;
	baseId: string;
}

export interface IBaseTransaction {
	id: string;
	base: IBase;
	transaction: ITransaction;
}

export interface IBaseTransactionQuery extends IQuery<Prisma.BaseWhereInput, Prisma.BaseOrderByWithRelationInput> {
}

export interface IBaseTransactionFetchProps {
	baseTransaction: IBaseTransaction;
}

export interface IBaseTransactionFetchQuery extends ParsedUrlQuery {
	baseTransactionId: string;
}

export type IBaseTransactionService = IRepositoryService<IBaseTransactionCreate, BaseTransaction, IBaseTransaction, IBaseTransactionQuery, IBaseTransactionFetchProps, IBaseTransactionFetchQuery>;
