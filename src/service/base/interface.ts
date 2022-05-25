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
	vendor: string;
}

export type IBaseWhere = Prisma.BaseWhereInput & IWithFulltext;

export interface IBaseQuery extends IQuery<IBaseWhere, Prisma.BaseOrderByWithRelationInput> {
}

export type IBaseEntity = Base & IWithVendor;
export type IWithBaseEntity = { base: IBaseEntity; };
export type IWithNullBaseEntity = { base: IBaseEntity | null; };

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

export interface IBaseFetchQuery extends ParsedUrlQuery {
	baseId: string;
}

export interface IBaseSource extends ISource<IBaseCreate, IBaseEntity, IBase, IBaseQuery> {
}
