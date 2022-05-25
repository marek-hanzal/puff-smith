import {ITag} from "@/puff-smith/service/tag/interface";
import {IVendor, IWithVendor} from "@/puff-smith/service/vendor/interface";
import {IQuery, ISource, IWithFulltext} from "@leight-core/api";
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

export type IAromaWhere = Prisma.AromaWhereInput & IWithFulltext;

export interface IAromaQuery extends IQuery<IAromaWhere, Prisma.AromaOrderByWithRelationInput> {
}

export type IAromaEntity = Aroma & IWithVendor;

export type IWithAromaEntity = { aroma: IAromaEntity; }

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

export interface IAromaSource extends ISource<IAromaCreate, IAromaEntity, IAroma, IAromaQuery> {
}
