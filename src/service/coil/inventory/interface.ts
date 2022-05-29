import {ICoil, ICoilEntity, ICoilQuery, IWithCoilDraw} from "@/puff-smith/service/coil/interface";
import {IWithFiber, IWithFiberMaterial} from "@/puff-smith/service/fiber/interface";
import {IWithVendor} from "@/puff-smith/service/vendor/interface";
import {IWithWire, IWithWireDraw, IWithWireFiber} from "@/puff-smith/service/wire/interface";
import {ISource} from "@leight-core/api";

export interface ICoilInventorySource extends ISource<undefined, ICoilEntity<IWithWire<IWithVendor & IWithWireDraw & IWithWireFiber<IWithFiber<IWithFiberMaterial>>> & IWithCoilDraw>, ICoil, ICoilQuery> {
}
