import {ITagEntity} from "@/puff-smith/service/tag/interface";
import {IVendor, IVendorReference, IWithVendor} from "@/puff-smith/service/vendor/interface";
import {IQuery, ISource, ITag, IWithFulltext} from "@leight-core/api";
import {Aroma, Prisma} from "@prisma/client";
import {ParsedUrlQuery} from "querystring";

export interface IAromaCreate extends Omit<IAroma, "id" | "vendor" | "vendorId" | "code" | "tastes" | "tasteIds">, IVendorReference {
	code?: string;
	tastes?: string;
	tasteIds?: string[];
}

export interface IAroma extends Omit<Aroma, "userId"> {
	vendor: IVendor;
	tastes: ITag[];
	tasteIds: string[];
}

export interface IAromaFetch {
	aroma: IAroma;
}

export interface IAromaFetchParams extends ParsedUrlQuery {
	aromaId: string;
}

export type IAromaEntity = Aroma & IWithVendor & { AromaTaste: { taste: ITagEntity }[]; };
export type IAromaQuery = IQuery<Prisma.AromaWhereInput & IWithFulltext, Prisma.AromaOrderByWithRelationInput>;

export interface IAromaSource extends ISource
	<IAromaCreate,
		IAromaEntity,
		IAroma,
		IAromaQuery,
		IAromaFetch,
		IAromaFetchParams> {
}
