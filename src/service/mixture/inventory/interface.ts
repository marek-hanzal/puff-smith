import {IWithAroma, IWithAromaTaste} from "@/puff-smith/service/aroma/interface";
import {IWithNullBaseEntity} from "@/puff-smith/service/base/interface";
import {IWithNullBoosterEntity} from "@/puff-smith/service/booster/interface";
import {IMixture, IMixtureEntity, IMixtureQuery, IWithMixtureDraw} from "@/puff-smith/service/mixture/interface";
import {IWithVendor} from "@/puff-smith/service/vendor/interface";
import {ISource} from "@leight-core/api";

export interface IMixtureInventorySource extends ISource<undefined, IMixtureEntity<IWithMixtureDraw & IWithAroma<IWithVendor & IWithAromaTaste> & IWithNullBaseEntity<IWithVendor> & IWithNullBoosterEntity<IWithVendor>> & IWithNullBaseEntity<IWithVendor> & IWithNullBoosterEntity<IWithVendor>, IMixture, IMixtureQuery> {
}
