import {IMixtureInventoryQuery} from "@/puff-smith/service/mixture/inventory/interface";
import {IVendor, IWithVendor} from "@/puff-smith/service/vendor/interface";
import {ISource} from "@leight-core/api";

export interface IMixtureVendorSource extends ISource<undefined, IWithVendor, IVendor, IMixtureInventoryQuery> {
}
