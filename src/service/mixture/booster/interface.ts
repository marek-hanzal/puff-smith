import {IBooster, IWithNullBooster} from "@/puff-smith/service/booster/interface";
import {IMixtureQuery} from "@/puff-smith/service/mixture/interface";
import {IWithVendor} from "@/puff-smith/service/vendor/interface";
import {ISource} from "@leight-core/api";

export interface IMixtureBoosterSource extends ISource<undefined, IWithNullBooster<IWithVendor>, IBooster, IMixtureQuery> {
}
