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
	volume: number;
	content: number;
	steep?: number;
	tastes?: string;
	tasteIds?: string[];
	withMixtures?: boolean;
	withInventory?: boolean;
} & IVendorReference;

export type IAromaEntity<T = void> = T extends void ? Aroma : Aroma & T;
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
	volume: number;
	steep?: number | null;
	tastes: ITag[];
	tasteIds: string[];
}

export interface IAromaFetch {
	aroma: IAroma;
}

export interface IAromaFetchParams extends ParsedUrlQuery {
	aromaId: string;
}

export type IAromaQuery = IQuery<Prisma.AromaWhereInput & IWithFulltext, Prisma.AromaOrderByWithRelationInput>;
export type IAromaSourceEntity = IAromaEntity<IWithVendor & IWithAromaTaste>;
export type IWithAromaSourceEntity = { aroma: IAromaSourceEntity; };

export interface IAromaSource extends ISource<IAromaCreate,
	IAromaSourceEntity,
	IAroma,
	IAromaQuery,
	IAromaFetch,
	IAromaFetchParams> {
}
