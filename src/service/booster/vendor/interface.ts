import {IBoosterEntity, IBoosterQuery} from "@/puff-smith/service/booster/interface";
import {IVendor} from "@/puff-smith/service/vendor/interface";
import {ISource} from "@leight-core/api";

export interface IBoosterVendorSource extends ISource<undefined, IBoosterEntity, IVendor, IBoosterQuery> {
}
