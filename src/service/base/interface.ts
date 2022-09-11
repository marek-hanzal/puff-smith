import {IVendor, IWithVendor} from "@/puff-smith/service/vendor/interface";
import {IQuery, ISource, IWithFulltext} from "@leight-core/api";
import {Base, Prisma} from "@prisma/client";
import {ParsedUrlQuery} from "querystring";

export interface IBaseCreate {
	name: string;
	code?: string;
	cost: number;
	pg: number;
	vg: number;
	vendor?: string;
	vendorId: string;
	withInventory?: boolean;
}

export interface IBaseQuery extends IQuery<Prisma.BaseWhereInput & IWithFulltext, Prisma.BaseOrderByWithRelationInput> {
}

export type IBaseEntity<T = void> = T extends void ? Base : Base & T;
export type IWithBase<T = void> = { base: IBaseEntity<T>; };
export type IWithNullBase<T = void> = { base: IBaseEntity<T> | null; };

export interface IBase {
	id: string;
	name: string;
	code: string;
	cost: number;
	pg: number;
	vg: number;
	vendor: IVendor;
	vendorId: string;
}

export interface IBaseFetchProps {
	base: IBase;
}

export interface IBaseFetchParams extends ParsedUrlQuery {
	baseId: string;
}

export interface IBaseSource extends ISource<IBaseCreate, IBaseEntity<IWithVendor>, IBase, IBaseQuery, IBaseFetchProps, IBaseFetchParams> {
}
