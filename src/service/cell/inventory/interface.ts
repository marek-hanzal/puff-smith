import {IServiceCreate} from "@/puff-smith/service";
import {ICell} from "@/puff-smith/service/cell/interface";
import {ITransaction} from "@/puff-smith/service/transaction/interface";
import {IDeleteRequest, IQuery, IRepositoryService} from "@leight-core/api";
import {CellInventory, Prisma} from "@prisma/client";
import {ParsedUrlQuery} from "querystring";

export interface ICellInventoryCreate {
	code?: string;
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

export interface ICellInventoryDelete extends IDeleteRequest {
}

export interface ICellInventoryQuery extends IQuery<Prisma.CellInventoryWhereInput, Prisma.CellInventoryOrderByWithRelationInput> {
}

export interface ICellInventoryFetchProps {
	cellTransaction: ICellInventory;
}

export interface ICellInventoryFetchQuery extends ParsedUrlQuery {
	cellTransactionId: string;
}

export interface ICellInventoryServiceCreate extends IServiceCreate {
}

export interface ICellInventoryService extends IRepositoryService<ICellInventoryCreate, CellInventory, ICellInventory, ICellInventoryQuery, ICellInventoryFetchProps, ICellInventoryFetchQuery> {
	handleDelete(request: { request: ICellInventoryDelete }): Promise<ICellInventory[]>;
}
