import {IAromaEntity, IAromaQuery} from "@/puff-smith/service/aroma/interface";
import {IVendor, IWithVendor} from "@/puff-smith/service/vendor/interface";
import {ISource} from "@leight-core/api";

export type IAromaVendorEntity = IAromaEntity & IWithVendor;

export interface IAromaVendorSource extends ISource<undefined, IAromaVendorEntity, IVendor, IAromaQuery> {
}
