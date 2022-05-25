import {IMixture, IMixtureEntity, IMixtureQuery} from "@/puff-smith/service/mixture/interface";
import {ISource} from "@leight-core/api";

export interface IMixtureMarket {
	mixture: IMixture;
	booster: { isOwned: boolean | undefined };
	base: { isOwned: boolean | undefined };
}

export interface IMixtureMarketSource extends ISource<undefined, IMixtureEntity, IMixtureMarket, IMixtureQuery> {
}
