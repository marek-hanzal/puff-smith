import {IServiceCreate} from "@/puff-smith/service";
import {ITransaction} from "@/puff-smith/service/transaction/interface";
import {IWire} from "@/puff-smith/service/wire/interface";
import {IDeleteRequest, IQuery, IRepository} from "@leight-core/api";
import {Prisma, WireInventory} from "@prisma/client";
import {ParsedUrlQuery} from "querystring";

export interface IWireInventoryCreate {
	wireId: string;
	code?: string;
}

export interface IWireInventory {
	id: string;
	code: string;
	wire: IWire;
	wireId: string;
	transaction: ITransaction;
	transactionId: string;
}

export interface IWireInventoryDelete extends IDeleteRequest {
}

export interface IWireInventoryQuery extends IQuery<Prisma.WireInventoryWhereInput, Prisma.WireInventoryOrderByWithRelationInput> {
}

export interface IWireInventoryFetchProps {
	wireTransaction: IWireInventory;
}

export interface IWireInventoryFetchQuery extends ParsedUrlQuery {
	wireTransactionId: string;
}

export interface IWireInventoryServiceCreate extends IServiceCreate {
}

export interface IWireInventoryService extends IRepository<IWireInventoryCreate, WireInventory, IWireInventory, IWireInventoryQuery, IWireInventoryFetchProps, IWireInventoryFetchQuery> {
	handleDelete(request: { request: IWireInventoryDelete }): Promise<IWireInventory[]>;
}
