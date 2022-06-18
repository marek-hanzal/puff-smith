import {IAtomizer, IWithAtomizer, IWithAtomizerDraw} from "@/puff-smith/service/atomizer/interface";
import {ITransaction, IWithNullTransaction} from "@/puff-smith/service/transaction/interface";
import {IWithVendor} from "@/puff-smith/service/vendor/interface";
import {IQuery, ISource, IWithFulltext} from "@leight-core/api";
import {AtomizerInventory, Prisma} from "@prisma/client";

export interface IAtomizerInventoryCreate {
	atomizerId: string;
	code?: string;
}

export interface IAtomizerInventory {
	id: string;
	code: string;
	atomizer: IAtomizer;
	atomizerId: string;
	transaction?: ITransaction | null;
	transactionId?: string | null;
	rating?: number | null;
}

export interface IAtomizerInventoryQuery extends IQuery<Prisma.AtomizerInventoryWhereInput & IWithFulltext, Prisma.AtomizerInventoryOrderByWithRelationInput> {
}

export type IAtomizerInventoryEntity<T = void> = T extends void ? AtomizerInventory : AtomizerInventory & T;
export type IWithAtomizerInventory<T = void> = { AtomizerInventory: IAtomizerInventoryEntity<T>[]; };

export interface IAtomizerInventorySource extends ISource<IAtomizerInventoryCreate, IAtomizerInventoryEntity<IWithAtomizer<IWithVendor & IWithAtomizerDraw> & IWithNullTransaction>, IAtomizerInventory, IAtomizerInventoryQuery> {
}
