import {IAromaQuery} from "@/puff-smith/service/aroma/interface";
import {IVendor, IWithVendor} from "@/puff-smith/service/vendor/interface";
import {ISource} from "@leight-core/api";

export interface IAromaVendorSource extends ISource<undefined, IWithVendor, IVendor, IAromaQuery> {
}
