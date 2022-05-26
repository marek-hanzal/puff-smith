import {IBase, IBaseEntity, IBaseQuery} from "@/puff-smith/service/base/interface";
import {IWithVendor} from "@/puff-smith/service/vendor/interface";
import {ISource} from "@leight-core/api";

export interface IBaseMarket {
	base: IBase;
	isOwned: boolean | undefined;
}

export interface IBaseMarketSource extends ISource<undefined, IBaseEntity<IWithVendor>, IBaseMarket, IBaseQuery> {
}
