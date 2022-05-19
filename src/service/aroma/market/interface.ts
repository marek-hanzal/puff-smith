import {IServiceCreate} from "@/puff-smith/service";
import {IAroma} from "@/puff-smith/service/aroma/interface";
import {IQuery, IRepository} from "@leight-core/api";
import {Aroma, Prisma} from "@prisma/client";

export interface IAromaMarket {
	aroma: IAroma;
	isOwned: boolean | undefined;
}

export interface IAromaMarketQuery extends IQuery<Prisma.AromaWhereInput, Prisma.AromaOrderByWithRelationInput> {
}

export interface IAromaMarketRepositoryCreate extends IServiceCreate {
}

export interface IAromaMarketRepository extends IRepository<void, Aroma, IAromaMarket, IAromaMarketQuery, void, {}> {
}
