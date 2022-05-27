import {ITag, ITagEntity} from "@/puff-smith/service/tag/interface";
import {IVendor, IWithVendor} from "@/puff-smith/service/vendor/interface";
import {IQuery, ISource, IWithFulltext} from "@leight-core/api";
import {Cotton, Prisma} from "@prisma/client";
import {ParsedUrlQuery} from "querystring";

export interface ICottonCreate {
	name: string;
	code?: string;
	vendor: string;
	draws?: string;
	cost: number;
}

export type ICottonWhere = Prisma.CottonWhereInput & IWithFulltext;

export interface ICottonQuery extends IQuery<ICottonWhere, Prisma.CottonOrderByWithRelationInput> {
}

export type ICottonEntity<T = void> = T extends void ? Cotton : Cotton & T;
export type IWithCottonEntity<T = void> = { cotton: ICottonEntity<T>; };
export type IWithCottonDraw = { CottonDraw: { draw: ITagEntity; }[] };

export interface ICotton {
	id: string;
	name: string;
	code: string;
	vendor: IVendor;
	vendorId: string;
	draws: ITag[];
	cost: number;
}

export interface ICottonFetch {
	cotton: ICotton;
}

export interface ICottonFetchParams extends ParsedUrlQuery {
	cottonId: string;
}

export interface ICottonSource extends ISource<ICottonCreate, ICottonEntity<IWithVendor & IWithCottonDraw>, ICotton, ICottonQuery, ICottonFetch, ICottonFetchParams> {
}
