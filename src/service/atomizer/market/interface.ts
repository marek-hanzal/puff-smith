import {IAtomizer, IAtomizerEntity, IAtomizerQuery, IWithAtomizerDraw} from "@/puff-smith/service/atomizer/interface";
import {IWithVendor} from "@/puff-smith/service/vendor/interface";
import {ISource} from "@leight-core/api";

export interface IAtomizerMarket {
	atomizer: IAtomizer;
	isOwned: boolean | undefined;
}

export interface IAtomizerMarketSource extends ISource<void, IAtomizerEntity<IWithVendor & IWithAtomizerDraw>, IAtomizerMarket, IAtomizerQuery> {
}
