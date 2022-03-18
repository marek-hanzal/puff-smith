import {Prisma, Transaction} from "@prisma/client";
import {IQuery} from "@leight-core/api";

export interface ITransactionCreate {
	amount: number;
	userId: string;
	note?: string | null;
}

export type ITransactions = Promise<Transaction[]>;

export type ITransactionFilter = Prisma.TransactionWhereInput;
export type ITransactionOrderBy = Prisma.TransactionOrderByWithRelationInput;

export interface ITransactionQuery extends IQuery<ITransactionFilter, ITransactionOrderBy> {
}

export interface ITransaction {
	id: string;
	amount: number;
	created: Date;
	note?: string | null;
}
