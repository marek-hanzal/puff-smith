import {ICottonQuery} from "@/puff-smith/service/cotton/interface";
import {IVendor, IWithVendor} from "@/puff-smith/service/vendor/interface";
import {ISource} from "@leight-core/api";

export interface ICottonVendorSource extends ISource<undefined, IWithVendor, IVendor, ICottonQuery> {
}
