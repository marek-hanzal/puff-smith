import {IBooster, IWithNullBoosterEntity} from "@/puff-smith/service/booster/interface";
import {IMixtureInventoryQuery} from "@/puff-smith/service/mixture/inventory/interface";
import {IWithVendor} from "@/puff-smith/service/vendor/interface";
import {ISource} from "@leight-core/api";

export interface IMixtureBoosterSource extends ISource<undefined, IWithNullBoosterEntity<IWithVendor>, IBooster, IMixtureInventoryQuery> {
}
