import {IWithModCell} from "@/puff-smith/service/mod/cell/interface";
import {IMod, IModEntity, IModQuery} from "@/puff-smith/service/mod/interface";
import {IWithModInventoryEntity} from "@/puff-smith/service/mod/inventory/interface";
import {IWithVendor} from "@/puff-smith/service/vendor/interface";
import {ISource} from "@leight-core/api";

export interface IModMarket {
	mod: IMod;
	isOwned: boolean | undefined;
}

export interface IModMarketSource extends ISource<undefined, IModEntity<IWithModInventoryEntity & IWithVendor & IWithModCell>, IModMarket, IModQuery> {
}
