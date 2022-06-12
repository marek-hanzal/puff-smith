import {IPrice} from "@/puff-smith/service/price/interface";
import {IQuery, ISource} from "@leight-core/api";
import {Prisma, Transaction} from "@prisma/client";
import {ParsedUrlQuery} from "querystring";

export interface ITransactionCreate {
	amount: number;
	userId: string;
	note?: string | null;
}

export interface ITransactionQuery extends IQuery<Prisma.TransactionWhereInput, Prisma.TransactionOrderByWithRelationInput> {
}

export type ITransactionEntity = Transaction;
export type IWithTransaction = { transaction: ITransactionEntity; };
export type IWithNullTransaction = { transaction?: ITransactionEntity | null; };

export interface ITransaction {
	id: string;
	amount: number;
	created: string;
	note?: string | null;
	priceId?: string | null;
	price?: IPrice | null;
}

export interface ITransactionFetchProps {
	transaction: ITransaction;
}

export interface ITransactionFetchQuery extends ParsedUrlQuery {
	transactionId: string;
}

export interface IHandleTransactionRequest<T> {
	userId: string;
	cost?: number | null;
	note?: string;

	callback(transaction: ITransactionEntity): Promise<T>;
}

export interface ICheckRequest {
	price: string;
	tariff?: string;
}

export interface ICheckResponse {
	price: number;
	pass: boolean;
}

export interface ITransactionSource extends ISource<ITransactionCreate, ITransactionEntity, ITransaction, ITransactionQuery> {
	sum(query: ITransactionQuery): Promise<number>;

	sumOf(): Promise<number>;

	handleTransaction<T>(request: IHandleTransactionRequest<T>): Promise<T>;

	check(request: ICheckRequest): Promise<ICheckResponse>;
}
