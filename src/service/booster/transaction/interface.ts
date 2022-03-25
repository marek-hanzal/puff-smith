import {BoosterTransaction, Prisma} from "@prisma/client";
import {IQuery, IRepositoryService} from "@leight-core/api";
import {ITransaction} from "@/puff-smith/service/transaction";
import {IBooster} from "@/puff-smith/service/booster";
import {ParsedUrlQuery} from "querystring";

export interface IBoosterTransactionCreate {
	userId: string;
	boosterId: string;
}

export interface IBoosterTransaction {
	id: string;
	booster: IBooster;
	transaction: ITransaction;
}

export interface IBoosterTransactionQuery extends IQuery<Prisma.BoosterWhereInput, Prisma.BoosterOrderByWithRelationInput> {
}

export interface IBoosterTransactionFetchProps {
	boosterTransaction: IBoosterTransaction;
}

export interface IBoosterTransactionFetchQuery extends ParsedUrlQuery {
	boosterTransactionId: string;
}

export type IBoosterTransactionService = IRepositoryService<IBoosterTransactionCreate, BoosterTransaction, IBoosterTransaction, IBoosterTransactionQuery, IBoosterTransactionFetchProps, IBoosterTransactionFetchQuery>;
