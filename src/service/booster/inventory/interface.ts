import {IBooster, IWithBoosterEntity} from "@/puff-smith/service/booster/interface";
import {ITransaction, IWithTransaction} from "@/puff-smith/service/transaction/interface";
import {IQuery, ISource} from "@leight-core/api";
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

export interface IBoosterInventoryQuery extends IQuery<Prisma.BoosterInventoryWhereInput, Prisma.BoosterInventoryOrderByWithRelationInput> {
}

export type IBoosterInventoryEntity = BoosterInventory & IWithBoosterEntity & IWithTransaction;

export interface IBoosterInventorySource extends ISource<IBoosterInventoryCreate, IBoosterInventoryEntity, IBoosterInventory, IBoosterInventoryQuery> {
}
