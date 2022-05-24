import {ITag} from "@/puff-smith/service/tag/interface";
import {IVendor, IWithVendorEntity} from "@/puff-smith/service/vendor/interface";
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

export type ICottonEntity = Cotton & IWithVendorEntity;
export type IWithCottonEntity = { cotton: ICottonEntity; };

export interface ICotton {
	id: string;
	name: string;
	code: string;
	vendor: IVendor;
	vendorId: string;
	draws: ITag[];
	cost: number;
}

export interface ICottonFetchProps {
	cotton: ICotton;
}

export interface ICottonFetchQuery extends ParsedUrlQuery {
	cottonId: string;
}

export interface ICottonSource extends ISource<ICottonCreate, ICottonEntity, ICotton, ICottonQuery> {
}
