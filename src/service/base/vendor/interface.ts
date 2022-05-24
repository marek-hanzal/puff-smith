import {IBaseEntity, IBaseQuery} from "@/puff-smith/service/base/interface";
import {IVendor} from "@/puff-smith/service/vendor/interface";
import {ISource} from "@leight-core/api";

export interface IBaseVendorSource extends ISource<undefined, IBaseEntity, IVendor, IBaseQuery> {
}
