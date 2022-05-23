import {ITag, ITagEntity} from "@/puff-smith/service/tag/interface";
import {IVendor, IVendorEntity, IVendorQuery, IWithVendorEntity} from "@/puff-smith/service/vendor/interface";
import {IQuery, IRepository, ISource, IWithFulltext} from "@leight-core/api";
import {Aroma, AromaTaste, Prisma} from "@prisma/client";
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

export type IAromaEntity = Aroma & IWithVendorEntity;

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

export interface IAromaSource extends ISource<IAromaEntity, IAroma, IAromaQuery> {
}

export interface IAromaRepository extends IRepository<IAromaCreate, IAromaSource> {
}

export type IAromaTasteEntity = AromaTaste & IWithAromaEntity & { taste: ITagEntity };

export type IAromaTasteWhere = Prisma.AromaTasteWhereInput & IWithFulltext;

export interface IAromaTasteQuery extends IQuery<IAromaTasteWhere, Prisma.AromaTasteOrderByWithRelationInput> {
}

export interface IAromaTasteSource extends ISource<IAromaTasteEntity, ITag, IAromaTasteQuery> {
}

export interface IAromaVendorSource extends ISource<IVendorEntity, IVendor, IVendorQuery> {
}
