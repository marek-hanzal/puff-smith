import {IServiceCreate} from "@/puff-smith/service";
import {ITag} from "@/puff-smith/service/tag/interface";
import {IVendor} from "@/puff-smith/service/vendor/interface";
import {IQuery, IRepositoryService, IWhereFulltext} from "@leight-core/api";
import {Cotton, Prisma} from "@prisma/client";
import {ParsedUrlQuery} from "querystring";

export interface ICottonCreate {
	name: string;
	code?: string;
	vendor: string;
	draws?: string;
	cost: number;
}

export type ICottonWhere = Prisma.CottonWhereInput & IWhereFulltext;

export interface ICottonQuery extends IQuery<ICottonWhere, Prisma.CottonOrderByWithRelationInput> {
}

export interface ICotton {
	id: string;
	name: string;
	code: string;
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

export interface ICottonServiceCreate extends IServiceCreate {
}

export interface ICottonService extends IRepositoryService<ICottonCreate, Cotton, ICotton, ICottonQuery, ICottonFetchProps, ICottonFetchQuery> {
}
