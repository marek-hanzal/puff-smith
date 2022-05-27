import {IWithFiber, IWithFiberMaterial} from "@/puff-smith/service/fiber/interface";
import {IWithVendor} from "@/puff-smith/service/vendor/interface";
import {IWire, IWireEntity, IWireQuery, IWithWireDraw, IWithWireFiber} from "@/puff-smith/service/wire/interface";
import {IWireInventoryEntity} from "@/puff-smith/service/wire/inventory/interface";
import {ISource} from "@leight-core/api";

export interface IWireMarket {
	wire: IWire;
	isOwned: boolean | undefined;
}

export type IWithWireMarketInventory<T = void> = { WireInventory: IWireInventoryEntity<T>[]; };


export interface IWireMarketSource extends ISource<undefined, IWireEntity<IWithVendor & IWithWireDraw & IWithWireFiber<IWithFiber<IWithFiberMaterial>> & IWithWireMarketInventory>, IWireMarket, IWireQuery> {
}
