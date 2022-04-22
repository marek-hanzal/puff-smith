import {IBooster} from "@/puff-smith/service/booster";
import {IQuery, IRepositoryService} from "@leight-core/api";
import {Booster, Prisma} from "@prisma/client";

export interface IBoosterMarket {
	booster: IBooster;
	isOwned: boolean | undefined;
}

export interface IBoosterMarketQuery extends IQuery<Prisma.BoosterWhereInput, Prisma.BoosterOrderByWithRelationInput> {
}

export interface IBoosterMarketService extends IRepositoryService<void, Booster, IBoosterMarket, IBoosterMarketQuery, void, {}> {
}
