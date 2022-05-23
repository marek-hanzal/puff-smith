import {IServiceCreate} from "@/puff-smith/service";
import {IBooster} from "@/puff-smith/service/booster/interface";
import {IQuery, ISource} from "@leight-core/api";
import {Booster, Prisma} from "@prisma/client";

export interface IBoosterMarket {
	booster: IBooster;
	isOwned: boolean | undefined;
}

export interface IBoosterMarketQuery extends IQuery<Prisma.BoosterWhereInput, Prisma.BoosterOrderByWithRelationInput> {
}

export interface IBoosterMarketSourceCreate extends IServiceCreate {
}

export interface IBoosterMarketSource extends ISource<void, Booster, IBoosterMarket, IBoosterMarketQuery, void, {}> {
}
