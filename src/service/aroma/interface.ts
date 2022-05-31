import {ITag, ITagEntity} from "@/puff-smith/service/tag/interface";
import {IVendor, IVendorReference, IWithVendor} from "@/puff-smith/service/vendor/interface";
import {IQuery, ISource, IWithFulltext} from "@leight-core/api";
import {Aroma, Prisma} from "@prisma/client";
import {ParsedUrlQuery} from "querystring";

export type IAromaCreate = {
	name: string;
	code?: string;
	cost: number;
	pg: number;
	vg: number;
	volume?: number;
	content: number;
	steep?: number;
	tastes?: string;
	tasteIds?: string[];
} & IVendorReference;

export interface IAromaQuery extends IQuery<Prisma.AromaWhereInput & IWithFulltext, Prisma.AromaOrderByWithRelationInput> {
}

export type IAromaEntity<T = void> = T extends void ? Aroma : Aroma & T;
export type IWithAroma<T = void> = { aroma: IAromaEntity<T>; }
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
