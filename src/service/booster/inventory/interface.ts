import {BoosterInventory, Prisma} from "@prisma/client";
import {IQuery, IRepositoryService} from "@leight-core/api";
import {ITransaction} from "@/puff-smith/service/transaction";
import {IBooster} from "@/puff-smith/service/booster";
import {ParsedUrlQuery} from "querystring";

export interface IBoosterInventoryCreate {
	userId: string;
	boosterId: string;
}

export interface IBoosterInventory {
	id: string;
	booster: IBooster;
	transaction: ITransaction;
}

export interface IBoosterInventoryQuery extends IQuery<Prisma.BoosterInventoryWhereInput, Prisma.BoosterInventoryOrderByWithRelationInput> {
}

export interface IBoosterInventoryFetchProps {
	boosterTransaction: IBoosterInventory;
}

export interface IBoosterInventoryFetchQuery extends ParsedUrlQuery {
	boosterTransactionId: string;
}

export type IBoosterInventoryService = IRepositoryService<IBoosterInventoryCreate, BoosterInventory, IBoosterInventory, IBoosterInventoryQuery, IBoosterInventoryFetchProps, IBoosterInventoryFetchQuery>;
