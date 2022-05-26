import {IBoosterQuery} from "@/puff-smith/service/booster/interface";
import {IVendor, IWithVendor} from "@/puff-smith/service/vendor/interface";
import {ISource} from "@leight-core/api";

export interface IBoosterVendorSource extends ISource<undefined, IWithVendor, IVendor, IBoosterQuery> {
}
