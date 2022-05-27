import {ICotton, ICottonEntity, ICottonQuery, IWithCottonDraw} from "@/puff-smith/service/cotton/interface";
import {ICottonInventoryEntity} from "@/puff-smith/service/cotton/inventory/interface";
import {IWithVendor} from "@/puff-smith/service/vendor/interface";
import {ISource} from "@leight-core/api";

export interface ICottonMarket {
	cotton: ICotton;
	isOwned: boolean | undefined;
}

export type IWithCottonMarketInventory = { CottonInventory: ICottonInventoryEntity[]; };

export interface ICottonMarketSource extends ISource<undefined, ICottonEntity<IWithVendor & IWithCottonMarketInventory & IWithCottonDraw>, ICottonMarket, ICottonQuery> {
}
