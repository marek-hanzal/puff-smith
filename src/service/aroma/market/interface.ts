import {IAroma, IAromaEntity, IAromaQuery, IWithAromaTaste} from "@/puff-smith/service/aroma/interface";
import {IWithVendor} from "@/puff-smith/service/vendor/interface";
import {ISource} from "@leight-core/api";

export interface IAromaMarket {
	aroma: IAroma;
	isOwned: boolean | undefined;
}

export interface IAromaMarketSource extends ISource<undefined, IAromaEntity<IWithVendor & IWithAromaTaste>, IAromaMarket, IAromaQuery> {
}
