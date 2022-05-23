import {IQuery, IRepository, ISource, IWhereFulltext} from "@leight-core/api";
import {Prisma, Vendor} from "@prisma/client";
import {ParsedUrlQuery} from "querystring";

export interface IVendorReference {
	vendorId?: string;
	vendor?: string;
}

export interface IVendorCreate {
	name: string;
}

export type IVendorWhere = Prisma.VendorWhereInput & IWhereFulltext;

export interface IVendorQuery extends IQuery<IVendorWhere, Prisma.VendorOrderByWithRelationInput> {
}

export type IVendorEntity = Vendor;

export type IWithVendorEntity = { vendor: IVendorEntity };

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

export interface IVendorSource extends ISource<IVendorEntity, IVendor, IVendorQuery> {
}

export interface IVendorRepository extends IRepository<IVendorCreate, IVendorSource> {
	fetchByReference(request: IVendorReference): Promise<IVendorEntity>;

	fetchByReferenceOptional(request: IVendorReference): Promise<IVendorEntity | undefined>;
}
