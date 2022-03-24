import {CellTransaction, Prisma} from "@prisma/client";
import {IQuery, IRepositoryService} from "@leight-core/api";
import {ITransaction} from "@/puff-smith/service/transaction";
import {ICell} from "@/puff-smith/service/cell";
import {ParsedUrlQuery} from "querystring";

export interface ICellTransactionCreate {
	userId: string;
	cellId: string;
}

export interface ICellTransaction {
	id: string;
	cell: ICell;
	transaction: ITransaction;
}

export interface ICellTransactionQuery extends IQuery<Prisma.CellWhereInput, Prisma.CellOrderByWithRelationInput> {
}

export interface ICellTransactionFetchProps {
	cellTransaction: ICellTransaction;
}

export interface ICellTransactionFetchQuery extends ParsedUrlQuery {
	cellTransactionId: string;
}

export type ICellTransactionService = IRepositoryService<ICellTransactionCreate, CellTransaction, ICellTransaction, ICellTransactionQuery, ICellTransactionFetchProps, ICellTransactionFetchQuery>;
