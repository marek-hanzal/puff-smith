import {Prisma, Transaction} from "@prisma/client";
import {IQuery, IRepositoryService} from "@leight-core/api";
import {ParsedUrlQuery} from "querystring";

export interface ITransactionCreate {
	amount: number;
	userId: string;
	note?: string | null;
}

export interface ITransactionQuery extends IQuery<Prisma.TransactionWhereInput, Prisma.TransactionOrderByWithRelationInput> {
}

export interface ITransaction {
	id: string;
	amount: number;
	created: Date;
	note?: string | null;
}

export interface ITransactionFetchProps {
	transaction: ITransaction;
}

export interface ITransactionFetchQuery extends ParsedUrlQuery {
	transactionId: string;
}

export interface ITransactionService extends IRepositoryService<ITransactionCreate, Transaction, ITransaction, ITransactionQuery, ITransactionFetchProps, ITransactionFetchQuery> {
	sum(query: ITransactionQuery): Promise<number>;

	sumOf(userId: string): Promise<number>;

	handleTransaction<T>(userId: string, cost: number | undefined | null, callback: (transaction: Transaction) => Promise<T>, note?: string): Promise<T>;
}
