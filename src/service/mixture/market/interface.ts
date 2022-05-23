import {IServiceCreate} from "@/puff-smith/service";
import {IMixture} from "@/puff-smith/service/mixture/interface";
import {IQuery, ISource} from "@leight-core/api";
import {Mixture, Prisma} from "@prisma/client";

export interface IMixtureMarket {
	mixture: IMixture;
	booster: { isOwned: boolean | undefined };
	base: { isOwned: boolean | undefined };
}

export interface IMixtureMarketQuery extends IQuery<Prisma.MixtureWhereInput, Prisma.MixtureOrderByWithRelationInput> {
}

export interface IMixtureMarketSourceCreate extends IServiceCreate {
}

export interface IMixtureMarketSource extends ISource<void, Mixture, IMixtureMarket, IMixtureMarketQuery, void, {}> {
}
