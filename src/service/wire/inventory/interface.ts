import {IServiceCreate} from "@/puff-smith/service";
import {ITransaction} from "@/puff-smith/service/transaction/interface";
import {IWire} from "@/puff-smith/service/wire/interface";
import {IQuery, IRepositoryService} from "@leight-core/api";
import {Prisma, WireInventory} from "@prisma/client";
import {ParsedUrlQuery} from "querystring";

export interface IWireInventoryCreate {
	wireId: string;
}

export interface IWireInventory {
	id: string;
	wire: IWire;
	wireId: string;
	transaction: ITransaction;
	transactionId: string;
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

export interface IWireInventoryService extends IRepositoryService<IWireInventoryCreate, WireInventory, IWireInventory, IWireInventoryQuery, IWireInventoryFetchProps, IWireInventoryFetchQuery> {
}
