import {IBase, IBaseEntity, IBaseQuery} from "@/puff-smith/service/base/interface";
import {IBaseInventoryEntity} from "@/puff-smith/service/base/inventory/interface";
import {IWithVendor} from "@/puff-smith/service/vendor/interface";
import {ISource} from "@leight-core/api";

export interface IBaseMarket {
	base: IBase;
	isOwned: boolean | undefined;
}

export type IWithBaseMarketInventory = { BaseInventory: IBaseInventoryEntity[]; };

export interface IBaseMarketSource extends ISource<undefined, IBaseEntity<IWithVendor & IWithBaseMarketInventory>, IBaseMarket, IBaseQuery> {
}
