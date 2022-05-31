import {IWithAroma, IWithAromaTaste} from "@/puff-smith/service/aroma/interface";
import {IWithNullBase} from "@/puff-smith/service/base/interface";
import {IWithNullBooster} from "@/puff-smith/service/booster/interface";
import {IMixture, IMixtureEntity, IMixtureQuery, IWithMixtureDraw} from "@/puff-smith/service/mixture/interface";
import {IWithVendor} from "@/puff-smith/service/vendor/interface";
import {ISource} from "@leight-core/api";

export type IMixtureEntityExpanded =
	IMixtureEntity<IWithMixtureDraw & IWithAroma<IWithVendor & IWithAromaTaste> & IWithNullBase<IWithVendor> & IWithNullBooster<IWithVendor>>
	& IWithNullBase<IWithVendor>
	& IWithNullBooster<IWithVendor>;

export interface IMixtureInventorySource extends ISource<undefined, IMixtureEntityExpanded, IMixture, IMixtureQuery> {
}
