import {Prisma, Vendor} from "@prisma/client";
import {IQuery, IRepositoryService} from "@leight-core/api";
import {ParsedUrlQuery} from "querystring";

export interface IVendorCreate {
	name: string;
}

export interface IVendorQuery extends IQuery<Prisma.VendorWhereInput, Prisma.VendorOrderByWithRelationAndSearchRelevanceInput> {
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

export type IVendorService = IRepositoryService<IVendorCreate, Vendor, IVendor, IVendorQuery, IVendorFetchProps, IVendorFetchQuery>;
