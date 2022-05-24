import {IAtomizer, IAtomizerEntity, IAtomizerQuery} from "@/puff-smith/service/atomizer/interface";
import {ISource} from "@leight-core/api";

export interface IAtomizerMarket {
	atomizer: IAtomizer;
	isOwned: boolean | undefined;
}

export interface IAtomizerMarketSource extends ISource<void, IAtomizerEntity, IAtomizerMarket, IAtomizerQuery> {
}
