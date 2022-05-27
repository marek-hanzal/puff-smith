import {IVendor, IWithVendor} from "@/puff-smith/service/vendor/interface";
import {IWireQuery} from "@/puff-smith/service/wire/interface";
import {ISource} from "@leight-core/api";

export interface IWireVendorSource extends ISource<undefined, IWithVendor, IVendor, IWireQuery> {
}
