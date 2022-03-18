import {Prisma, Vendor} from "@prisma/client";
import {IQuery} from "@leight-core/api";

export interface IVendorCreate {
	name: string;
}

export type IVendors = Promise<Vendor[]>;

export type IVendorFilter = Prisma.VendorWhereInput;
export type IVendorOrderBy = Prisma.VendorOrderByWithRelationInput;

export interface IVendorQuery extends IQuery<IVendorFilter, IVendorOrderBy> {
}

export interface IVendor {
	id: string;
	name: string;
}
