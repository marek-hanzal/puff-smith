import {Cotton, Prisma} from "@prisma/client";
import {IQuery, IRepositoryService} from "@leight-core/api";
import {ParsedUrlQuery} from "querystring";
import {IVendor} from "@/puff-smith/service/vendor";

export interface ICottonCreate {
	name: string;
	vendor: string;
	cost: number;
}

export interface ICottonQuery extends IQuery<Prisma.CottonWhereInput, Prisma.CottonOrderByWithRelationInput> {
}

export interface ICotton {
	id: string;
	name: string;
	vendor: IVendor;
	cost: number;
}

export interface ICottonFetchProps {
	cotton: ICotton;
}

export interface ICottonFetchQuery extends ParsedUrlQuery {
	cottonId: string;
}

export type ICottonService = IRepositoryService<ICottonCreate, Cotton, ICotton, ICottonQuery, ICottonFetchProps, ICottonFetchQuery>;
