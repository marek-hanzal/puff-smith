import {IBase, IWithNullBase} from "@/puff-smith/service/base/interface";
import {ILiquidQuery} from "@/puff-smith/service/liquid/interface";
import {IWithVendor} from "@/puff-smith/service/vendor/interface";
import {ISource} from "@leight-core/api";

export interface ILiquidBaseSource extends ISource<undefined, IWithNullBase<IWithVendor>, IBase, ILiquidQuery> {
}
