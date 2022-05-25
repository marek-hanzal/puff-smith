import {ITag} from "@/puff-smith/service/tag/interface";
import {IVendor, IWithVendor} from "@/puff-smith/service/vendor/interface";
import {IQuery, ISource, IWithFulltext} from "@leight-core/api";
import {Atomizer, Prisma} from "@prisma/client";
import {ParsedUrlQuery} from "querystring";

export interface IAtomizerCreate {
	vendor: string;
	code?: string;
	name: string;
	dualCoil?: string;
	type: string;
	draws?: string;
	squonk?: string;
	cost?: string;
}

export type IAtomizerWhere = Prisma.AtomizerWhereInput & IWithFulltext;

export interface IAtomizerQuery extends IQuery<IAtomizerWhere, Prisma.AtomizerOrderByWithRelationInput> {
}

export type IAtomizerEntity = Atomizer & IWithVendor;

export type IWithAtomizerEntity = { atomizer: IAtomizerEntity; };

export interface IAtomizer {
	id: string;
	name: string;
	code: string;
	cost?: number | null;
	vendor: IVendor;
	vendorId: string;
	draws: ITag[];
}

export interface IAtomizerFetchProps {
	atomizer: IAtomizer;
}

export interface IAtomizerFetchQuery extends ParsedUrlQuery {
	atomizerId: string;
}

export interface IAtomizerSource extends ISource<IAtomizerCreate, IAtomizerEntity, IAtomizer, IAtomizerQuery> {
}
