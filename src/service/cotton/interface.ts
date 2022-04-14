import {ITag} from "@/puff-smith/service/tag";
import {IVendor} from "@/puff-smith/service/vendor";
import {IQuery, IRepositoryService} from "@leight-core/api";
import {Cotton, Prisma} from "@prisma/client";
import {ParsedUrlQuery} from "querystring";

export interface ICottonCreate {
	name: string;
	vendor: string;
	draws?: string;
	cost: number;
}

export interface ICottonQuery extends IQuery<Prisma.CottonWhereInput, Prisma.CottonOrderByWithRelationInput> {
}

export interface ICotton {
	id: string;
	name: string;
	vendor: IVendor;
	vendorId: string;
	draws: ITag[];
	cost: number;
}

export interface ICottonFetchProps {
	cotton: ICotton;
}

export interface ICottonFetchQuery extends ParsedUrlQuery {
	cottonId: string;
}

export type ICottonService = IRepositoryService<ICottonCreate, Cotton, ICotton, ICottonQuery, ICottonFetchProps, ICottonFetchQuery>;
