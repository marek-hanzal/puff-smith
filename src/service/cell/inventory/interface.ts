import {ICell} from "@/puff-smith/service/cell";
import {ITransaction} from "@/puff-smith/service/transaction";
import {IQuery, IRepositoryService} from "@leight-core/api";
import {CellInventory, Prisma} from "@prisma/client";
import {ParsedUrlQuery} from "querystring";

export interface ICellInventoryCreate {
	code?: string;
	userId: string;
	cellId: string;
}

export interface ICellInventory {
	id: string;
	code: string;
	cell: ICell;
	cellId: string;
	transaction: ITransaction;
	transactionId: string;
}

export interface ICellInventoryQuery extends IQuery<Prisma.CellInventoryWhereInput, Prisma.CellInventoryOrderByWithRelationInput> {
}

export interface ICellInventoryFetchProps {
	cellTransaction: ICellInventory;
}

export interface ICellInventoryFetchQuery extends ParsedUrlQuery {
	cellTransactionId: string;
}

export type ICellInventoryService = IRepositoryService<ICellInventoryCreate, CellInventory, ICellInventory, ICellInventoryQuery, ICellInventoryFetchProps, ICellInventoryFetchQuery>;
