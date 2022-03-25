import {AromaTransaction, Prisma} from "@prisma/client";
import {IQuery, IRepositoryService} from "@leight-core/api";
import {ITransaction} from "@/puff-smith/service/transaction";
import {IAroma} from "@/puff-smith/service/aroma";
import {ParsedUrlQuery} from "querystring";

export interface IAromaTransactionCreate {
	userId: string;
	aromaId: string;
}

export interface IAromaTransaction {
	id: string;
	aroma: IAroma;
	transaction: ITransaction;
}

export interface IAromaTransactionQuery extends IQuery<Prisma.AromaWhereInput, Prisma.AromaOrderByWithRelationInput> {
}

export interface IAromaTransactionFetchProps {
	aromaTransaction: IAromaTransaction;
}

export interface IAromaTransactionFetchQuery extends ParsedUrlQuery {
	aromaTransactionId: string;
}

export type IAromaTransactionService = IRepositoryService<IAromaTransactionCreate, AromaTransaction, IAromaTransaction, IAromaTransactionQuery, IAromaTransactionFetchProps, IAromaTransactionFetchQuery>;
