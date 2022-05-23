import {IServiceCreate} from "@/puff-smith/service";
import {IAroma, IAromaEntity} from "@/puff-smith/service/aroma/interface";
import {IQuery, ISource} from "@leight-core/api";
import {Prisma} from "@prisma/client";

export interface IAromaMarket {
	aroma: IAroma;
	isOwned: boolean | undefined;
}

export interface IAromaMarketQuery extends IQuery<Prisma.AromaWhereInput, Prisma.AromaOrderByWithRelationInput> {
}

export interface IAromaMarketSourceCreate extends IServiceCreate {
}

export interface IAromaMarketSource extends ISource<void, IAromaEntity, IAromaMarket, IAromaMarketQuery, void, {}> {
}
