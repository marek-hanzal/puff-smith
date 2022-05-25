import {ITransaction, IWithTransaction} from "@/puff-smith/service/transaction/interface";
import {IWire, IWithWire} from "@/puff-smith/service/wire/interface";
import {IQuery, ISource} from "@leight-core/api";
import {Prisma, WireInventory} from "@prisma/client";

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

export interface IWireInventoryQuery extends IQuery<Prisma.WireInventoryWhereInput, Prisma.WireInventoryOrderByWithRelationInput> {
}

export type IWireInventoryEntity<T = any> = WireInventory & T;

export interface IWireInventorySource extends ISource<IWireInventoryCreate, IWireInventoryEntity<IWithWire & IWithTransaction>, IWireInventory, IWireInventoryQuery> {
}
