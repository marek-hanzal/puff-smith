import {IFiber, IWithFiber, IWithFiberMaterial} from "@/puff-smith/service/fiber/interface";
import {IWireQuery} from "@/puff-smith/service/wire/interface";
import {ISource} from "@leight-core/api";

export interface IWireFiberSource extends ISource<undefined, IWithFiber<IWithFiberMaterial>, IFiber, IWireQuery> {
}
