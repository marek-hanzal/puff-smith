import {IBaseQuery} from "@/puff-smith/service/base/interface";
import {IVendor, IWithVendor} from "@/puff-smith/service/vendor/interface";
import {ISource} from "@leight-core/api";

export interface IBaseVendorSource extends ISource<undefined, IWithVendor, IVendor, IBaseQuery> {
}
