import {IBase, IBaseEntity, IBaseQuery} from "@/puff-smith/service/base/interface";
import {ISource} from "@leight-core/api";

export interface IBaseMarket {
	base: IBase;
	isOwned: boolean | undefined;
}

export interface IBaseMarketSource extends ISource<undefined, IBaseEntity, IBaseMarket, IBaseQuery> {
}
