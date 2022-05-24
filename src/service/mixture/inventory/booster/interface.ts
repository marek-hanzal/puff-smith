import {IBooster} from "@/puff-smith/service/booster/interface";
import {IMixtureInventoryEntity, IMixtureInventoryQuery} from "@/puff-smith/service/mixture/inventory/interface";
import {ISource} from "@leight-core/api";

export interface IMixtureBoosterSource extends ISource<undefined, IMixtureInventoryEntity, IBooster, IMixtureInventoryQuery> {
}
