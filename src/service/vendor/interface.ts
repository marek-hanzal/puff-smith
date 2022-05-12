import {IServiceCreate} from "@/puff-smith/service";
import {IQuery, IRepositoryService, IWhereFulltext} from "@leight-core/api";
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

export interface IVendorServiceCreate extends IServiceCreate {
}

export interface IVendorService extends IRepositoryService<IVendorCreate, Vendor, IVendor, IVendorQuery, IVendorFetchProps, IVendorFetchQuery> {
	fetchByReference(request: IVendorReference): Promise<Vendor>;

	fetchByReferenceOptional(request: IVendorReference): Promise<Vendor | undefined>;
}
