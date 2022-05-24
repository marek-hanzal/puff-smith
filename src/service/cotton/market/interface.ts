import {ICotton, ICottonEntity, ICottonQuery} from "@/puff-smith/service/cotton/interface";
import {ISource} from "@leight-core/api";

export interface ICottonMarket {
	cotton: ICotton;
	isOwned: boolean | undefined;
}

export interface ICottonMarketSource extends ISource<undefined, ICottonEntity, ICottonMarket, ICottonQuery> {
}
