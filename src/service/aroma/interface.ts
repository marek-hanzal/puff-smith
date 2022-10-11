import {ContainerClass} from "@/puff-smith/service/Container";
import {ITagEntity}     from "@/puff-smith/service/tag/interface";
import {
	IVendor,
	IVendorReference,
	IWithVendor
}                       from "@/puff-smith/service/vendor/interface";
import {
	IQuery,
	ISource,
	ITag,
	IWithFulltext
}                       from "@leight-core/api";
import {
	Aroma,
	Prisma
}                       from "@prisma/client";
import {ParsedUrlQuery} from "querystring";

export type IAromaEntity =
	Aroma
	& IWithVendor
	& { AromaTaste: { taste: ITagEntity }[]; };

export type IWithAroma = { aroma: IAromaEntity; };

export interface IAroma extends Omit<Aroma, "userId"> {
	vendor: IVendor;
	tastes: ITag[];
	tasteIds: string[];
}

export interface IAromaCreate extends Omit<Aroma, "id" | "userId" | "vendor" | "vendorId" | "code">, IVendorReference {
	code?: string;
	tastes?: string;
	tasteIds?: string[];
	userId?: string | null;
}

export type IAromaQuery = IQuery<Prisma.AromaWhereInput & IWithFulltext, Prisma.AromaOrderByWithRelationInput>;

export interface IAromaFetch {
	aroma: IAroma;
}

export interface IAromaFetchParams extends ParsedUrlQuery {
	aromaId: string;
}

export interface IAromaSource extends ISource<//
	ContainerClass,
	IAromaEntity,
	IAroma,
	IAromaQuery,
	IAromaCreate> {
}
