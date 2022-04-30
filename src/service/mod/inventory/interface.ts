import {IServiceCreate} from "@/puff-smith/service";
import {IMod} from "@/puff-smith/service/mod/interface";
import {ITransaction} from "@/puff-smith/service/transaction/interface";
import {IQuery, IRepositoryService} from "@leight-core/api";
import {ModInventory, Prisma} from "@prisma/client";
import {ParsedUrlQuery} from "querystring";

export interface IModInventoryCreate {
	modId: string;
}

export interface IModInventory {
	id: string;
	mod: IMod;
	modId: string;
	transaction: ITransaction;
	transactionId: string;
}

export interface IModInventoryQuery extends IQuery<Prisma.ModInventoryWhereInput, Prisma.ModInventoryOrderByWithRelationInput> {
}

export interface IModInventoryFetchProps {
	modTransaction: IModInventory;
}

export interface IModInventoryFetchQuery extends ParsedUrlQuery {
	modTransactionId: string;
}

export interface IModTransactionServiceCreate extends IServiceCreate {
}

export interface IModTransactionService extends IRepositoryService<IModInventoryCreate, ModInventory, IModInventory, IModInventoryQuery, IModInventoryFetchProps, IModInventoryFetchQuery> {
}
