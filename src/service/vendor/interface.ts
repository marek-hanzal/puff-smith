import {IQuery, ISource, IWithFulltext} from "@leight-core/api";
import {Prisma, Vendor} from "@prisma/client";
import {ParsedUrlQuery} from "querystring";

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

export interface IVendorFetchProps {
	vendor: IVendor;
}

export interface IVendorFetchQuery extends ParsedUrlQuery {
	vendorId: string;
}

export interface IVendorSource extends ISource<IVendorCreate, IVendorEntity, IVendor, IVendorQuery> {
	fetchByReference(request: IVendorReference): Promise<IVendorEntity>;

	fetchByReferenceOptional(request: IVendorReference): Promise<IVendorEntity | undefined>;
}
