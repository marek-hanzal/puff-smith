import {IAroma, IWithAroma, IWithAromaTaste} from "@/puff-smith/service/aroma/interface";
import {ILiquidQuery} from "@/puff-smith/service/liquid/interface";
import {IWithVendor} from "@/puff-smith/service/vendor/interface";
import {ISource} from "@leight-core/api";

export interface ILiquidAromaSource extends ISource<undefined, IWithAroma<IWithVendor & IWithAromaTaste>, IAroma, ILiquidQuery> {
}
