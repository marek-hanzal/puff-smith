import {IAroma, IAromaEntity, IAromaQuery} from "@/puff-smith/service/aroma/interface";
import {ISource} from "@leight-core/api";

export interface ILiquidAromaSource extends ISource<undefined, IAromaEntity, IAroma, IAromaQuery> {
}
