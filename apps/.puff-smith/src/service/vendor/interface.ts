import {ContainerClass} from "@/puff-smith/service/Container";
import {
    IQuery,
    ISource,
    IWithFulltext
}                       from "@leight-core/viv";
import {
    Prisma,
    Vendor
}                       from "@prisma/client";

export interface IVendorReference {
	vendorId?: string;
	vendor?: string;
}

export interface IVendorCreate {
	name: string;
}

export interface IVendorQuery extends IQuery<Prisma.VendorWhereInput & IWithFulltext, Prisma.VendorOrderByWithRelationInput> {
}

export type IVendorEntity = Vendor;
export type IWithVendor = { vendor: IVendorEntity };

export interface IVendor {
	id: string;
	name: string;
}

export interface IVendorSource extends ISource<//
	ContainerClass,
	IVendorEntity,
	IVendor,
	IVendorQuery,
	IVendorCreate> {
	fetchByReference(request: IVendorReference): Promise<IVendorEntity>;

	fetchByReferenceOptional(request: IVendorReference): Promise<IVendorEntity | undefined>;
}
