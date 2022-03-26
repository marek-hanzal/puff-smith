import {ModInventory, Prisma} from "@prisma/client";
import {IQuery, IRepositoryService} from "@leight-core/api";
import {ITransaction} from "@/puff-smith/service/transaction";
import {IMod} from "@/puff-smith/service/mod";
import {ParsedUrlQuery} from "querystring";

export interface IModInventoryCreate {
	userId: string;
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

export type IModTransactionService = IRepositoryService<IModInventoryCreate, ModInventory, IModInventory, IModInventoryQuery, IModInventoryFetchProps, IModInventoryFetchQuery>;
