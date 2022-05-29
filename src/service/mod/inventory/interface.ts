import {IWithModCell} from "@/puff-smith/service/mod/cell/interface";
import {IMod, IWithMod} from "@/puff-smith/service/mod/interface";
import {ITransaction, IWithTransaction} from "@/puff-smith/service/transaction/interface";
import {IWithVendor} from "@/puff-smith/service/vendor/interface";
import {IQuery, ISource, IWithFulltext} from "@leight-core/api";
import {ModInventory, Prisma} from "@prisma/client";

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

export interface IModInventoryQuery extends IQuery<Prisma.ModInventoryWhereInput & IWithFulltext, Prisma.ModInventoryOrderByWithRelationInput> {
}

export type IModInventoryEntity<T = void> = T extends void ? ModInventory : ModInventory & T;
export type IWithModInventoryEntity<T = void> = { ModInventory: IModInventoryEntity<T>[]; };

export interface IModInventorySource extends ISource<IModInventoryCreate, IModInventoryEntity<IWithTransaction & IWithMod<IWithVendor & IWithModCell>>, IModInventory, IModInventoryQuery> {
}
