import {IServiceCreate} from "@/puff-smith/service";
import {IVendor} from "@/puff-smith/service/vendor/interface";
import {IQuery, IRepository, IWhereFulltext} from "@leight-core/api";
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

export type IBaseWhere = Prisma.BaseWhereInput & IWhereFulltext;

export interface IBaseQuery extends IQuery<IBaseWhere, Prisma.BaseOrderByWithRelationInput> {
}

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

export interface IBaseRepositoryCreate extends IServiceCreate {
}

export interface IBaseRepository extends IRepository<IBaseCreate, Base, IBase, IBaseQuery, IBaseFetchProps, IBaseFetchQuery> {
}
