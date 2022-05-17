import {IServiceCreate} from "@/puff-smith/service";
import {IBooster} from "@/puff-smith/service/booster/interface";
import {ITransaction} from "@/puff-smith/service/transaction/interface";
import {IQuery, IRepositoryService} from "@leight-core/api";
import {BoosterInventory, Prisma} from "@prisma/client";
import {ParsedUrlQuery} from "querystring";

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

export interface IBoosterInventoryDelete {
	ids: string[];
}

export interface IBoosterInventoryQuery extends IQuery<Prisma.BoosterInventoryWhereInput, Prisma.BoosterInventoryOrderByWithRelationInput> {
}

export interface IBoosterInventoryFetchProps {
	boosterTransaction: IBoosterInventory;
}

export interface IBoosterInventoryFetchQuery extends ParsedUrlQuery {
	boosterTransactionId: string;
}

export interface IBoosterInventoryServiceCreate extends IServiceCreate {
}

export interface IBoosterInventoryService extends IRepositoryService<IBoosterInventoryCreate, BoosterInventory, IBoosterInventory, IBoosterInventoryQuery, IBoosterInventoryFetchProps, IBoosterInventoryFetchQuery> {
	handleDelete(request: { request: IBoosterInventoryDelete }): Promise<IBoosterInventory[]>;
}
