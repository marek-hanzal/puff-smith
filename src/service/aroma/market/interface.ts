import {IAroma, IAromaEntity, IAromaQuery, IWithAromaTaste} from "@/puff-smith/service/aroma/interface";
import {IAromaInventoryEntity} from "@/puff-smith/service/aroma/inventory/interface";
import {IWithVendor} from "@/puff-smith/service/vendor/interface";
import {ISource} from "@leight-core/api";

export interface IAromaMarket {
	aroma: IAroma;
	isOwned: boolean | undefined;
}

export type IWithAromaMarketInventory = { AromaInventory: IAromaInventoryEntity[]; };

export interface IAromaMarketSource extends ISource<undefined, IAromaEntity<IWithVendor & IWithAromaTaste & IWithAromaMarketInventory>, IAromaMarket, IAromaQuery> {
}
