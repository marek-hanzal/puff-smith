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

export type IAromaEntity =
	Aroma
	& IWithVendor
	& { AromaTaste: { taste: ITagEntity }[]; };
export type IWithAromaEntity = { aroma: IAromaEntity; };

export interface IAroma extends Omit<Aroma, "userId"> {
	vendor: IVendor;
	tastes: ITag[];
	tasteIds: string[];
}

export interface IWithAroma {
	aroma: IAroma;
}

export interface IAromaCreate extends Omit<Aroma, "id" | "userId" | "vendor" | "vendorId" | "code">, IVendorReference {
	code?: string;
	tastes?: string;
	tasteIds?: string[];
	userId?: string | null;
}

export type IAromaQuery = IQuery<Prisma.AromaWhereInput & IWithFulltext, Prisma.AromaOrderByWithRelationInput>;

export interface IAromaSource extends ISource<//
	ContainerClass,
	IAromaEntity,
	IAroma,
	IAromaQuery,
	IAromaCreate> {
}
