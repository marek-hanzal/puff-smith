import {ICotton} from "@/puff-smith/service/cotton";
import {IQuery, IRepositoryService} from "@leight-core/api";
import {Cotton, Prisma} from "@prisma/client";

export interface ICottonMarket {
	cotton: ICotton;
	isOwned: boolean | undefined;
}

export interface ICottonMarketQuery extends IQuery<Prisma.CottonWhereInput, Prisma.CottonOrderByWithRelationInput> {
}

export interface ICottonMarketService extends IRepositoryService<void, Cotton, ICottonMarket, ICottonMarketQuery, void, {}> {
}