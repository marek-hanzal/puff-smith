import {IAtomizerQuery} from "@/puff-smith/service/atomizer/interface";
import {IVendor, IWithVendor} from "@/puff-smith/service/vendor/interface";
import {ISource} from "@leight-core/api";

export interface IAtomizerVendorSource extends ISource<undefined, IWithVendor, IVendor, IAtomizerQuery> {
}
