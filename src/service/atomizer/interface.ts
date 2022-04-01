import {Atomizer, Prisma} from "@prisma/client";
import {IQuery, IRepositoryService} from "@leight-core/api";
import {IVendor} from "@/puff-smith/service/vendor";
import {ParsedUrlQuery} from "querystring";

export interface IAtomizerCreate {
	vendor: string;
	name: string;
	dualCoil?: string;
	type: string;
	draw?: string;
	squonk?: string;
	cost?: string;
}

export interface IAtomizerQuery extends IQuery<Prisma.AtomizerWhereInput, Prisma.AtomizerOrderByWithRelationInput> {
}

export interface IAtomizer {
	id: string;
	name: string;
	cost?: number | null;
	vendor: IVendor;
	vendorId: string;
}

export interface IAtomizerFetchProps {
	atomizer: IAtomizer;
}

export interface IAtomizerFetchQuery extends ParsedUrlQuery {
	atomizerId: string;
}

export type IAtomizerService = IRepositoryService<IAtomizerCreate, Atomizer, IAtomizer, IAtomizerQuery, IAtomizerFetchProps, IAtomizerFetchQuery>;
