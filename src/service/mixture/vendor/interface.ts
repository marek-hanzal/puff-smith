import {IMixtureEntity, IMixtureQuery} from "@/puff-smith/service/mixture/interface";
import {IVendor} from "@/puff-smith/service/vendor/interface";
import {ISource} from "@leight-core/api";

export interface IMixtureVendorSource extends ISource<undefined, IMixtureEntity, IVendor, IMixtureQuery> {
}
