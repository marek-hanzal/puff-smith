import {IMixtureInventoryEntity, IMixtureInventoryQuery} from "@/puff-smith/service/mixture/inventory/interface";
import {IVendor} from "@/puff-smith/service/vendor/interface";
import {ISource} from "@leight-core/api";

export interface IMixtureVendorSource extends ISource<undefined, Pick<IMixtureInventoryEntity, "vendor">, IVendor, IMixtureInventoryQuery> {
}
