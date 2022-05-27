import {ICellQuery} from "@/puff-smith/service/cell/interface";
import {IVendor, IWithVendor} from "@/puff-smith/service/vendor/interface";
import {ISource} from "@leight-core/api";

export interface ICellVendorSource extends ISource<undefined, IWithVendor, IVendor, ICellQuery> {
}
