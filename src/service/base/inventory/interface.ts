import {IServiceCreate} from "@/puff-smith/service";
import {IBase} from "@/puff-smith/service/base/interface";
import {ITransaction} from "@/puff-smith/service/transaction/interface";
import {IQuery, IRepositoryService} from "@leight-core/api";
import {BaseInventory, Prisma} from "@prisma/client";
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

export interface IBaseInventoryQuery extends IQuery<Prisma.BaseInventoryWhereInput, Prisma.BaseInventoryOrderByWithRelationInput> {
}

export interface IBaseInventoryFetchProps {
	baseTransaction: IBaseInventory;
}

export interface IBaseInventoryFetchQuery extends ParsedUrlQuery {
	baseTransactionId: string;
}

export interface IBaseTransactionServiceCreate extends IServiceCreate {
}

export interface IBaseTransactionService extends IRepositoryService<IBaseInventoryCreate, BaseInventory, IBaseInventory, IBaseInventoryQuery, IBaseInventoryFetchProps, IBaseInventoryFetchQuery> {
}
