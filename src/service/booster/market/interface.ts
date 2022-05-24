import {IBooster, IBoosterEntity, IBoosterQuery} from "@/puff-smith/service/booster/interface";
import {ISource} from "@leight-core/api";

export interface IBoosterMarket {
	booster: IBooster;
	isOwned: boolean | undefined;
}

export interface IBoosterMarketSource extends ISource<undefined, IBoosterEntity, IBoosterMarket, IBoosterQuery> {
}
