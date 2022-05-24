import {IAroma, IAromaEntity, IAromaQuery} from "@/puff-smith/service/aroma/interface";
import {ISource} from "@leight-core/api";

export interface IAromaMarket {
	aroma: IAroma;
	isOwned: boolean | undefined;
}

export interface IAromaMarketSource extends ISource<undefined, IAromaEntity, IAromaMarket, IAromaQuery> {
}
