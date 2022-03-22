import {Atomizer, Prisma} from "@prisma/client";
import {IQuery, IRepositoryServiceFactory} from "@leight-core/api";
import {IVendor} from "@/puff-smith/service/vendor";

export interface IAtomizerCreate {
	vendor: string;
	name: string;
	dualCoil?: string;
	type: string;
	draw?: string;
	squonk?: string;
	cost?: string;
}

export type IAtomizerFilter = Prisma.AtomizerWhereInput;
export type IAtomizerOrderBy = Prisma.AtomizerOrderByWithRelationInput;

export interface IAtomizerQuery extends IQuery<IAtomizerFilter, IAtomizerOrderBy> {
}

export interface IAtomizer {
	id: string;
	name: string;
	cost?: number | null;
	vendor: IVendor;
}

export type IAtomizerServiceFactory = IRepositoryServiceFactory<IAtomizerCreate, Atomizer, IAtomizer, IAtomizerQuery>;
