import {IAtomizer, IAtomizerEntity, IAtomizerQuery, IWithAtomizerDraw} from "@/puff-smith/service/atomizer/interface";
import {IWithAtomizerInventory} from "@/puff-smith/service/atomizer/inventory/interface";
import {IWithVendor} from "@/puff-smith/service/vendor/interface";
import {ISource} from "@leight-core/api";

export interface IAtomizerMarket {
	atomizer: IAtomizer;
	isOwned?: boolean;
}

export interface IAtomizerMarketSource extends ISource<void, IAtomizerEntity<IWithAtomizerInventory & IWithVendor & IWithAtomizerDraw>, IAtomizerMarket, IAtomizerQuery> {
}
