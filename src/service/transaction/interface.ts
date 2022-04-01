import {Prisma, Transaction} from "@prisma/client";
import {IQuery, IRepositoryService} from "@leight-core/api";
import {ParsedUrlQuery} from "querystring";
import {IPrice} from "@/puff-smith/service/price";

export interface ITransactionCreate {
	amount: number;
	userId: string;
	note?: string | null;
}

export interface ITransactionQuery extends IQuery<Prisma.TransactionWhereInput, Prisma.TransactionOrderByWithRelationAndSearchRelevanceInput> {
}

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

	callback(transaction: Transaction): Promise<T>;
}

export interface ICheckRequest {
	userId: string;
	price: string;
	tariff?: string;
}

export interface ICheckResponse {
	price: number;
	pass: boolean;
}

export interface ITransactionService extends IRepositoryService<ITransactionCreate, Transaction, ITransaction, ITransactionQuery, ITransactionFetchProps, ITransactionFetchQuery> {
	sum(query: ITransactionQuery): Promise<number>;

	sumOf(userId: string): Promise<number>;

	handleTransaction<T>(request: IHandleTransactionRequest<T>): Promise<T>;

	check(request: ICheckRequest): Promise<ICheckResponse>;
}
