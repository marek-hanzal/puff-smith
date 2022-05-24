import {IBooster} from "@/puff-smith/service/booster/interface";
import {IMixtureEntity, IMixtureQuery} from "@/puff-smith/service/mixture/interface";
import {ISource} from "@leight-core/api";

export interface IMixtureBoosterSource extends ISource<undefined, IMixtureEntity, IBooster, IMixtureQuery> {
}
