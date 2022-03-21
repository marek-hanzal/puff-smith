import {Atomizer, AtomizerTransaction, Prisma} from "@prisma/client";
import {IQuery} from "@leight-core/api";
import {IVendor} from "@/puff-smith/service/vendor";
import {ITransaction} from "@/puff-smith/service/transaction";

export interface IAtomizerCreate {
	vendor: string;
	name: string;
	dualCoil?: string;
	type: string;
	draw?: string;
	squonk?: string;
	cost?: string;
}

export interface IAtomizerTransactionCreate {
	userId: string;
	atomizerId: string;
}

export interface IAtomizerTransaction {
	id: string;
	atomizer: IAtomizer;
	transaction: ITransaction;
}

export type IAtomizers = Promise<Atomizer[]>;
export type IAtomizerTransactions = Promise<AtomizerTransaction[]>;

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
