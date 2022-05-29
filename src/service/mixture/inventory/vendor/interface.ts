import {IMixtureQuery} from "@/puff-smith/service/mixture/interface";
import {IVendor, IWithVendor} from "@/puff-smith/service/vendor/interface";
import {ISource} from "@leight-core/api";

export interface IMixtureVendorSource extends ISource<undefined, IWithVendor, IVendor, IMixtureQuery> {
}
