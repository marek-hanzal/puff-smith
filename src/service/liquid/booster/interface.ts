import {IBooster, IBoosterEntity, IBoosterQuery} from "@/puff-smith/service/booster/interface";
import {ISource} from "@leight-core/api";

export interface ILiquidBoosterSource extends ISource<undefined, IBoosterEntity, IBooster, IBoosterQuery> {
}
