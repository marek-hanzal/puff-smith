import {IVendor} from "@/puff-smith/service/vendor";
import {IQuery, IRepositoryService} from "@leight-core/api";
import {Aroma, Prisma} from "@prisma/client";
import {ParsedUrlQuery} from "querystring";

export interface IAromaCreate {
	name: string;
	vendor: string;
	cost: number;
	pg: number;
	vg: number;
	volume?: number;
	content: number;
	steep?: number;
}

export interface IAromaQuery extends IQuery<Prisma.AromaWhereInput, Prisma.AromaOrderByWithRelationInput> {
}

export interface IAroma {
	id: string;
	name: string;
	vendor: IVendor;
	vendorId: string;
	cost: number;
	pg: number;
	vg: number;
	content: number;
	volume?: number;
	steep?: number | null;
}

export interface IAromaFetchProps {
	aroma: IAroma;
}

export interface IAromaFetchQuery extends ParsedUrlQuery {
	aromaId: string;
}

export interface IAromaService extends IRepositoryService<IAromaCreate, Aroma, IAroma, IAromaQuery, IAromaFetchProps, IAromaFetchQuery> {
}
