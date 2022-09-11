import {IAroma, IWithAromaSourceEntity} from "@/puff-smith/service/aroma/interface";
import {ILiquidQuery} from "@/puff-smith/service/liquid/interface";
import {ISource} from "@leight-core/api";

export interface ILiquidAromaSource extends ISource<undefined, IWithAromaSourceEntity, IAroma, ILiquidQuery> {
}
