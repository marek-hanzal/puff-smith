import {IServiceCreate} from "@/puff-smith/service";
import {IBase} from "@/puff-smith/service/base/interface";
import {IQuery, IRepository} from "@leight-core/api";
import {Base, Prisma} from "@prisma/client";

export interface IBaseMarket {
	base: IBase;
	isOwned: boolean | undefined;
}

export interface IBaseMarketQuery extends IQuery<Prisma.BaseWhereInput, Prisma.BaseOrderByWithRelationInput> {
}

export interface IBaseMarketRepositoryCreate extends IServiceCreate {
}

export interface IBaseMarketRepository extends IRepository<void, Base, IBaseMarket, IBaseMarketQuery, void, {}> {
}
