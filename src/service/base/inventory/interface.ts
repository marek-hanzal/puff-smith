import {BaseInventory, Prisma} from "@prisma/client";
import {IQuery, IRepositoryService} from "@leight-core/api";
import {ITransaction} from "@/puff-smith/service/transaction";
import {IBase} from "@/puff-smith/service/base";
import {ParsedUrlQuery} from "querystring";

export interface IBaseInventoryCreate {
	userId: string;
	baseId: string;
}

export interface IBaseInventory {
	id: string;
	base: IBase;
	baseId: string;
	transaction: ITransaction;
	transactionId: string;
}

export interface IBaseInventoryQuery extends IQuery<Prisma.BaseInventoryWhereInput, Prisma.BaseInventoryOrderByWithRelationAndSearchRelevanceInput> {
}

export interface IBaseInventoryFetchProps {
	baseTransaction: IBaseInventory;
}

export interface IBaseInventoryFetchQuery extends ParsedUrlQuery {
	baseTransactionId: string;
}

export type IBaseTransactionService = IRepositoryService<IBaseInventoryCreate, BaseInventory, IBaseInventory, IBaseInventoryQuery, IBaseInventoryFetchProps, IBaseInventoryFetchQuery>;
