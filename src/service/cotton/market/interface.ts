import {IServiceCreate} from "@/puff-smith/service";
import {ICotton} from "@/puff-smith/service/cotton/interface";
import {IQuery, IRepository} from "@leight-core/api";
import {Cotton, Prisma} from "@prisma/client";

export interface ICottonMarket {
	cotton: ICotton;
	isOwned: boolean | undefined;
}

export interface ICottonMarketQuery extends IQuery<Prisma.CottonWhereInput, Prisma.CottonOrderByWithRelationInput> {
}

export interface ICottonMarketRepositoryCreate extends IServiceCreate {
}

export interface ICottonMarketRepository extends IRepository<void, Cotton, ICottonMarket, ICottonMarketQuery, void, {}> {
}
