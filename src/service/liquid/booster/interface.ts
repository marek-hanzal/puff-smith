import {IBooster, IWithBoosterEntity} from "@/puff-smith/service/booster/interface";
import {ILiquidQuery} from "@/puff-smith/service/liquid/interface";
import {IWithVendor} from "@/puff-smith/service/vendor/interface";
import {ISource} from "@leight-core/api";

export type ILiquidBoosterSourceEntity = IWithBoosterEntity<IWithVendor>;

export interface ILiquidBoosterSource extends ISource<undefined, ILiquidBoosterSourceEntity, IBooster, ILiquidQuery> {
}
