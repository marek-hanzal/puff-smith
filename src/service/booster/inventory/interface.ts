import {IBooster, IWithBoosterEntity} from "@/puff-smith/service/booster/interface";
import {ITransaction, IWithTransaction} from "@/puff-smith/service/transaction/interface";
import {IWithVendor} from "@/puff-smith/service/vendor/interface";
import {IQuery, ISource, IWithFulltext} from "@leight-core/api";
import {BoosterInventory, Prisma} from "@prisma/client";

export interface IBoosterInventoryCreate {
	boosterId: string;
	code?: string;
}

export interface IBoosterInventory {
	id: string;
	code: string;
	booster: IBooster;
	boosterId: string;
	transaction: ITransaction;
	transactionId: string;
}

export interface IBoosterInventoryQuery extends IQuery<Prisma.BoosterInventoryWhereInput & IWithFulltext, Prisma.BoosterInventoryOrderByWithRelationInput> {
}

export type IBoosterInventoryEntity<T = void> = T extends void ? BoosterInventory : BoosterInventory & T;

export interface IBoosterInventorySource extends ISource<IBoosterInventoryCreate, IBoosterInventoryEntity<IWithBoosterEntity<IWithVendor> & IWithTransaction>, IBoosterInventory, IBoosterInventoryQuery> {
}
