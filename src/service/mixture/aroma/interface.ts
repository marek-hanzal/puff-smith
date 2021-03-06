import {IAroma, IWithAroma, IWithAromaTaste} from "@/puff-smith/service/aroma/interface";
import {IMixtureQuery} from "@/puff-smith/service/mixture/interface";
import {IWithVendor} from "@/puff-smith/service/vendor/interface";
import {ISource} from "@leight-core/api";

export interface IMixtureAromaSource extends ISource<undefined, IWithAroma<IWithVendor & IWithAromaTaste>, IAroma, IMixtureQuery> {
}
