import {ICellEntity, ICellQuery} from "@/puff-smith/service/cell/interface";
import {IVendor} from "@/puff-smith/service/vendor/interface";
import {ISource} from "@leight-core/api";

export interface ICellVendorSource extends ISource<undefined, ICellEntity, IVendor, ICellQuery> {
}
