import {IServiceCreate} from "@/puff-smith/service";
import {IBase} from "@/puff-smith/service/base/interface";
import {ITransaction} from "@/puff-smith/service/transaction/interface";
import {IDeleteRequest, IQuery, ISource} from "@leight-core/api";
import {BaseInventory, Prisma} from "@prisma/client";
import {ParsedUrlQuery} from "querystring";

export interface IBaseInventoryCreate {
	baseId: string;
	code?: string;
}

export interface IBaseInventory {
	id: string;
	code: string;
	base: IBase;
	baseId: string;
	transaction: ITransaction;
	transactionId: string;
}

export interface IBaseInventoryDelete extends IDeleteRequest {
}

export interface IBaseInventoryQuery extends IQuery<Prisma.BaseInventoryWhereInput, Prisma.BaseInventoryOrderByWithRelationInput> {
}

export interface IBaseInventoryFetchProps {
	baseInventory: IBaseInventory;
}

export interface IBaseInventoryFetchQuery extends ParsedUrlQuery {
	baseInventoryId: string;
}

export interface IBaseInventorySourceCreate extends IServiceCreate {
}

export interface IBaseInventorySource extends ISource<IBaseInventoryCreate, BaseInventory, IBaseInventory, IBaseInventoryQuery, IBaseInventoryFetchProps, IBaseInventoryFetchQuery> {
	handleDelete(request: { request: IBaseInventoryDelete }): Promise<IBaseInventory[]>;
}
