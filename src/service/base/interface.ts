import {IVendor} from "@/puff-smith/service/vendor/interface";
import {IQuery, IRepositoryService} from "@leight-core/api";
import {Base, Prisma} from "@prisma/client";
import {ParsedUrlQuery} from "querystring";

export interface IBaseCreate {
	name: string;
	cost: number;
	pg: number;
	vg: number;
	vendor: string;
}

export interface IBaseQuery extends IQuery<Prisma.BaseWhereInput, Prisma.BaseOrderByWithRelationInput> {
}

export interface IBase {
	id: string;
	name: string;
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

export type IBaseService = IRepositoryService<IBaseCreate, Base, IBase, IBaseQuery, IBaseFetchProps, IBaseFetchQuery>;
