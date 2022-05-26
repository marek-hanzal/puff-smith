import {IBooster, IWithBoosterEntity} from "@/puff-smith/service/booster/interface";
import {IMixtureQuery} from "@/puff-smith/service/mixture/interface";
import {ISource} from "@leight-core/api";

export interface IMixtureBoosterSource extends ISource<undefined, IWithBoosterEntity, IBooster, IMixtureQuery> {
}
