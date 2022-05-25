import {IWithVendor} from "@/puff-smith/service/vendor/interface";
import {IWire, IWireEntity, IWireQuery, IWithWireDraw, IWithWireFiber} from "@/puff-smith/service/wire/interface";
import {ISource} from "@leight-core/api";

export interface IWireMarket {
	wire: IWire;
	isOwned: boolean | undefined;
}

export interface IWireMarketSource extends ISource<undefined, IWireEntity<IWithVendor & IWithWireDraw & IWithWireFiber>, IWireMarket, IWireQuery> {
}
