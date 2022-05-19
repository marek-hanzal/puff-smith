import {IServiceCreate} from "@/puff-smith/service";
import {IBooster} from "@/puff-smith/service/booster/interface";
import {IQuery, IRepository} from "@leight-core/api";
import {Booster, Prisma} from "@prisma/client";

export interface IBoosterMarket {
	booster: IBooster;
	isOwned: boolean | undefined;
}

export interface IBoosterMarketQuery extends IQuery<Prisma.BoosterWhereInput, Prisma.BoosterOrderByWithRelationInput> {
}

export interface IBoosterMarketRepositoryCreate extends IServiceCreate {
}

export interface IBoosterMarketRepository extends IRepository<void, Booster, IBoosterMarket, IBoosterMarketQuery, void, {}> {
}
