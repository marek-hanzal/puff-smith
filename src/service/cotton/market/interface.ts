import {IServiceCreate} from "@/puff-smith/service";
import {ICotton} from "@/puff-smith/service/cotton/interface";
import {IQuery, ISource} from "@leight-core/api";
import {Cotton, Prisma} from "@prisma/client";

export interface ICottonMarket {
	cotton: ICotton;
	isOwned: boolean | undefined;
}

export interface ICottonMarketQuery extends IQuery<Prisma.CottonWhereInput, Prisma.CottonOrderByWithRelationInput> {
}

export interface ICottonMarketSourceCreate extends IServiceCreate {
}

export interface ICottonMarketSource extends ISource<void, Cotton, ICottonMarket, ICottonMarketQuery, void, {}> {
}
