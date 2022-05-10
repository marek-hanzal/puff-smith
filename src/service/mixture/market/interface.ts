import {IServiceCreate} from "@/puff-smith/service";
import {IMixture} from "@/puff-smith/service/mixture/interface";
import {IQuery, IRepositoryService} from "@leight-core/api";
import {Mixture, Prisma} from "@prisma/client";

export interface IMixtureMarket {
	mixture: IMixture;
	aroma: { isOwned: boolean | undefined };
	booster: { isOwned: boolean | undefined };
	base: { isOwned: boolean | undefined };
}

export interface IMixtureMarketQuery extends IQuery<Prisma.MixtureWhereInput, Prisma.MixtureOrderByWithRelationInput> {
}

export interface IMixtureMarketServiceCreate extends IServiceCreate {
}

export interface IMixtureMarketService extends IRepositoryService<void, Mixture, IMixtureMarket, IMixtureMarketQuery, void, {}> {
}
