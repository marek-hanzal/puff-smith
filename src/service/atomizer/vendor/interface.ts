import {IAtomizerEntity, IAtomizerQuery} from "@/puff-smith/service/atomizer/interface";
import {IVendor, IWithVendor} from "@/puff-smith/service/vendor/interface";
import {ISource} from "@leight-core/api";

export type IAtomizerVendorEntity = IAtomizerEntity & IWithVendor;

export interface IAtomizerVendorSource extends ISource<undefined, IAtomizerVendorEntity, IVendor, IAtomizerQuery> {
}
