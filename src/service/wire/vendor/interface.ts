import {IVendor} from "@/puff-smith/service/vendor/interface";
import {IWireEntity, IWireQuery} from "@/puff-smith/service/wire/interface";
import {ISource} from "@leight-core/api";

export interface IWireVendorSource extends ISource<undefined, IWireEntity, IVendor, IWireQuery> {
}
