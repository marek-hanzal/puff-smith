import {IServiceCreate} from "@/puff-smith/service";
import {ITag} from "@/puff-smith/service/tag/interface";
import {IVendor} from "@/puff-smith/service/vendor/interface";
import {IQuery, IRepositoryService, IWhereFulltext} from "@leight-core/api";
import {Aroma, Prisma} from "@prisma/client";
import {ParsedUrlQuery} from "querystring";

export interface IAromaCreate {
	name: string;
	code?: string;
	vendor: string;
	cost: number;
	pg: number;
	vg: number;
	volume?: number;
	content: number;
	steep?: number;
	tastes?: string;
}

export type IAromaWhere = Prisma.AromaWhereInput & IWhereFulltext;

export interface IAromaQuery extends IQuery<IAromaWhere, Prisma.AromaOrderByWithRelationInput> {
}

export interface IAroma {
	id: string;
	name: string;
	code: string;
	vendor: IVendor;
	vendorId: string;
	cost: number;
	pg: number;
	vg: number;
	content: number;
	volume?: number | null;
	steep?: number | null;
	tastes: ITag[];
}

export interface IAromaFetchProps {
	aroma: IAroma;
}

export interface IAromaFetchQuery extends ParsedUrlQuery {
	aromaId: string;
}

export interface IAromaServiceCreate extends IServiceCreate {
}

export interface IAromaService extends IRepositoryService<IAromaCreate, Aroma, IAroma, IAromaQuery, IAromaFetchProps, IAromaFetchQuery> {
}
