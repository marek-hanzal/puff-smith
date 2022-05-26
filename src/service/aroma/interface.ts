import {ITag, ITagEntity} from "@/puff-smith/service/tag/interface";
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

export type IAromaEntity<T = any> = Aroma & T;
export type IWithAroma<T = any> = { aroma: IAromaEntity<T>; }
export type IWithAromaTaste = { AromaTaste: { taste: ITagEntity }[]; }

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

export interface IAromaFetch {
	aroma: IAroma;
}

export interface IAromaFetchParams extends ParsedUrlQuery {
	aromaId: string;
}

export interface IAromaSource extends ISource<IAromaCreate, IAromaEntity<IWithVendor & IWithAromaTaste>, IAroma, IAromaQuery, IAromaFetch, IAromaFetchParams> {
}
