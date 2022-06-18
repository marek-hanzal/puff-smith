import {IWithFiber, IWithFiberMaterial} from "@/puff-smith/service/fiber/interface";
import {ITransaction, IWithNullTransaction} from "@/puff-smith/service/transaction/interface";
import {IWithVendor} from "@/puff-smith/service/vendor/interface";
import {IWire, IWithWire, IWithWireDraw, IWithWireFiber} from "@/puff-smith/service/wire/interface";
import {IQuery, ISource, IWithFulltext} from "@leight-core/api";
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
	transaction?: ITransaction | null;
	transactionId?: string | null;
	rating?: number | null;
}

export interface IWireInventoryQuery extends IQuery<Prisma.WireInventoryWhereInput & IWithFulltext, Prisma.WireInventoryOrderByWithRelationInput> {
}

export type IWireInventoryEntity<T = void> = T extends void ? WireInventory : WireInventory & T;

export interface IWireInventorySource extends ISource<IWireInventoryCreate, IWireInventoryEntity<IWithWire<IWithVendor & IWithWireDraw & IWithWireFiber<IWithFiber<IWithFiberMaterial>>> & IWithNullTransaction>, IWireInventory, IWireInventoryQuery> {
}
