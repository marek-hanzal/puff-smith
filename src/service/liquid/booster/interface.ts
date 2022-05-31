import {IBooster, IWithNullBooster} from "@/puff-smith/service/booster/interface";
import {ILiquidQuery} from "@/puff-smith/service/liquid/interface";
import {IWithVendor} from "@/puff-smith/service/vendor/interface";
import {ISource} from "@leight-core/api";

export interface ILiquidBoosterSource extends ISource<undefined, IWithNullBooster<IWithVendor>, IBooster, ILiquidQuery> {
}
