import {IModEntity, IModQuery} from "@/puff-smith/service/mod/interface";
import {IVendor, IWithVendor} from "@/puff-smith/service/vendor/interface";
import {ISource} from "@leight-core/api";

export interface IModVendorSource extends ISource<undefined, IModEntity<IWithVendor>, IVendor, IModQuery> {
}
