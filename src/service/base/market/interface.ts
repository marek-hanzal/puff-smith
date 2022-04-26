import {IBase} from "@/puff-smith/service/base/interface";
import {IQuery, IRepositoryService} from "@leight-core/api";
import {Base, Prisma} from "@prisma/client";

export interface IBaseMarket {
	base: IBase;
	isOwned: boolean | undefined;
}

export interface IBaseMarketQuery extends IQuery<Prisma.BaseWhereInput, Prisma.BaseOrderByWithRelationInput> {
}

export interface IBaseMarketService extends IRepositoryService<void, Base, IBaseMarket, IBaseMarketQuery, void, {}> {
}
