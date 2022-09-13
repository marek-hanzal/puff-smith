import {IBase, IWithBase} from "@/puff-smith/service/base/interface";
import {ILiquidQuery} from "@/puff-smith/service/liquid/interface";
import {IWithVendor} from "@/puff-smith/service/vendor/interface";
import {ISource} from "@leight-core/api";

export type ILiquidBaseSourceEntity = IWithBase<IWithVendor>;

export interface ILiquidBaseSource extends ISource<undefined, ILiquidBaseSourceEntity, IBase, ILiquidQuery> {
}
