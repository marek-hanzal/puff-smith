import {IAroma} from "@/puff-smith/service/aroma/interface";
import {IQuery, IRepositoryService} from "@leight-core/api";
import {Aroma, Prisma} from "@prisma/client";

export interface IAromaMarket {
	aroma: IAroma;
	isOwned: boolean | undefined;
}

export interface IAromaMarketQuery extends IQuery<Prisma.AromaWhereInput, Prisma.AromaOrderByWithRelationInput> {
}

export interface IAromaMarketService extends IRepositoryService<void, Aroma, IAromaMarket, IAromaMarketQuery, void, {}> {
}
