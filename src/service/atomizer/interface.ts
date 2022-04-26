import {ITag} from "@/puff-smith/service/tag/interface";
import {IVendor} from "@/puff-smith/service/vendor/interface";
import {IQuery, IRepositoryService} from "@leight-core/api";
import {Atomizer, Prisma} from "@prisma/client";
import {ParsedUrlQuery} from "querystring";

export interface IAtomizerCreate {
	vendor: string;
	name: string;
	dualCoil?: string;
	type: string;
	draws?: string;
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
	draws: ITag[];
}

export interface IAtomizerFetchProps {
	atomizer: IAtomizer;
}

export interface IAtomizerFetchQuery extends ParsedUrlQuery {
	atomizerId: string;
}

export interface IAtomizerService extends IRepositoryService<IAtomizerCreate, Atomizer, IAtomizer, IAtomizerQuery, IAtomizerFetchProps, IAtomizerFetchQuery> {
}
