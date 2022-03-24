import {ModTransaction, Prisma} from "@prisma/client";
import {IQuery, IRepositoryService} from "@leight-core/api";
import {ITransaction} from "@/puff-smith/service/transaction";
import {IMod} from "@/puff-smith/service/mod";
import {ParsedUrlQuery} from "querystring";

export interface IModTransactionCreate {
	userId: string;
	modId: string;
}

export interface IModTransaction {
	id: string;
	mod: IMod;
	transaction: ITransaction;
}

export interface IModTransactionQuery extends IQuery<Prisma.ModWhereInput, Prisma.ModOrderByWithRelationInput> {
}

export interface IModTransactionFetchProps {
	modTransaction: IModTransaction;
}

export interface IModTransactionFetchQuery extends ParsedUrlQuery {
	modTransactionId: string;
}

export type IModTransactionService = IRepositoryService<IModTransactionCreate, ModTransaction, IModTransaction, IModTransactionQuery, IModTransactionFetchProps, IModTransactionFetchQuery>;
