import {ITagEntity} from "@/puff-smith/service/tag/interface";
import {IVendor, IVendorReference, IWithVendor} from "@/puff-smith/service/vendor/interface";
import {IQuery, ISource, ITag, IWithFulltext} from "@leight-core/api";
import {Liquid, Prisma} from "@prisma/client";
import {ParsedUrlQuery} from "querystring";

export type ILiquidEntity = Liquid & IWithVendor & { LiquidTaste: { taste: ITagEntity }[]; };

export interface ILiquid extends Omit<Liquid, "userId"> {
	vendor: IVendor;
	tastes: ITag[];
	tasteIds: string[];
}

export interface ILiquidCreate extends Omit<Liquid, "id" | "userId" | "vendor" | "vendorId" | "code">, IVendorReference {
	code?: string;
	tastes?: string;
	tasteIds?: string[];
}

export type ILiquidQuery = IQuery<Prisma.LiquidWhereInput & IWithFulltext, Prisma.LiquidOrderByWithRelationInput>;

export interface ILiquidFetch {
	liquid: ILiquid;
}

export interface ILiquidFetchParams extends ParsedUrlQuery {
	liquidId: string;
}

export interface ILiquidSource extends ISource
	<ILiquidCreate,
		ILiquidEntity,
		ILiquid,
		ILiquidQuery,
		ILiquidFetch,
		ILiquidFetchParams> {
}
