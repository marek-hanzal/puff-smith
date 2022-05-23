import {IServiceCreate} from "@/puff-smith/service";
import {IMod} from "@/puff-smith/service/mod/interface";
import {ITransaction} from "@/puff-smith/service/transaction/interface";
import {IDeleteRequest, IQuery, ISource} from "@leight-core/api";
import {ModInventory, Prisma} from "@prisma/client";
import {ParsedUrlQuery} from "querystring";

export interface IModInventoryCreate {
	modId: string;
	code?: string;
}

export interface IModInventory {
	id: string;
	code: string;
	mod: IMod;
	modId: string;
	transaction: ITransaction;
	transactionId: string;
}

export interface IModInventoryDelete extends IDeleteRequest {
}

export interface IModInventoryQuery extends IQuery<Prisma.ModInventoryWhereInput, Prisma.ModInventoryOrderByWithRelationInput> {
}

export interface IModInventoryFetchProps {
	modTransaction: IModInventory;
}

export interface IModInventoryFetchQuery extends ParsedUrlQuery {
	modTransactionId: string;
}

export interface IModTransactionSourceCreate extends IServiceCreate {
}

export interface IModTransactionSource extends ISource<IModInventoryCreate, ModInventory, IModInventory, IModInventoryQuery, IModInventoryFetchProps, IModInventoryFetchQuery> {
	handleDelete(request: { request: IModInventoryDelete }): Promise<IModInventory[]>;
}
