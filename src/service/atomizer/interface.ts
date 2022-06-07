import {ITag, ITagEntity} from "@/puff-smith/service/tag/interface";
import {IVendor, IWithVendor} from "@/puff-smith/service/vendor/interface";
import {IQuery, ISource, IWithFulltext} from "@leight-core/api";
import {Atomizer, Prisma} from "@prisma/client";
import {ParsedUrlQuery} from "querystring";

export interface IAtomizerCreate {
	vendor?: string;
	vendorId?: string;
	code?: string;
	name: string;
	dualCoil?: string;
	type?: string;
	typeId?: string;
	draws?: string;
	drawIds?: string[];
	squonk?: string;
	cost?: string;
	coilMin?: number;
	coilMax?: number;
	wrapsMin?: number;
	wrapsMax?: number;
}

export interface IAtomizerQuery extends IQuery<Prisma.AtomizerWhereInput & IWithFulltext, Prisma.AtomizerOrderByWithRelationInput> {
}

export type IAtomizerEntity<T = void> = T extends void ? Atomizer : Atomizer & T;
export type IWithAtomizer<T = void> = { atomizer: IAtomizerEntity<T>; };
export type IWithAtomizerDraw = { AtomizerDraw: { draw: ITagEntity }[]; };

export interface IAtomizer {
	id: string;
	name: string;
	code: string;
	cost?: number | null;
	vendor: IVendor;
	vendorId: string;
	draws: ITag[];
	drawIds: string[];
	coilMin?: number | null;
	coilMax?: number | null;
	wrapsMin?: number | null;
	wrapsMax?: number | null;
}

export interface IAtomizerFetch {
	atomizer: IAtomizer;
}

export interface IAtomizerFetchParams extends ParsedUrlQuery {
	atomizerId: string;
}

export interface IAtomizerSource extends ISource<IAtomizerCreate, IAtomizerEntity<IWithVendor & IWithAtomizerDraw>, IAtomizer, IAtomizerQuery, IAtomizerFetch, IAtomizerFetchParams> {
}
