import {IServiceCreate} from "@/puff-smith/service";
import {IMixture} from "@/puff-smith/service/mixture/interface";
import {IQuery, IRepository} from "@leight-core/api";
import {Mixture, Prisma} from "@prisma/client";

export interface IMixtureMarket {
	mixture: IMixture;
	booster: { isOwned: boolean | undefined };
	base: { isOwned: boolean | undefined };
}

export interface IMixtureMarketQuery extends IQuery<Prisma.MixtureWhereInput, Prisma.MixtureOrderByWithRelationInput> {
}

export interface IMixtureMarketServiceCreate extends IServiceCreate {
}

export interface IMixtureMarketService extends IRepository<void, Mixture, IMixtureMarket, IMixtureMarketQuery, void, {}> {
}
