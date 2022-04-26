import {IAtomizer} from "@/puff-smith/service/atomizer/interface";
import {ITransaction} from "@/puff-smith/service/transaction/interface";
import {IQuery, IRepositoryService} from "@leight-core/api";
import {AtomizerInventory, Prisma} from "@prisma/client";
import {ParsedUrlQuery} from "querystring";

export interface IAtomizerInventoryCreate {
	userId: string;
	atomizerId: string;
}

export interface IAtomizerInventory {
	id: string;
	atomizer: IAtomizer;
	atomizerId: string;
	transaction: ITransaction;
	transactionId: string;
}

export interface IAtomizerInventoryQuery extends IQuery<Prisma.AtomizerInventoryWhereInput, Prisma.AtomizerInventoryOrderByWithRelationInput> {
}

export interface IAtomizerInventoryFetchProps {
	atomizerInventory: IAtomizerInventory;
}

export interface IAtomizerInventoryFetchQuery extends ParsedUrlQuery {
	atomizerInventoryId: string;
}

export type IAtomizerInventoryService = IRepositoryService<IAtomizerInventoryCreate, AtomizerInventory, IAtomizerInventory, IAtomizerInventoryQuery, IAtomizerInventoryFetchProps, IAtomizerInventoryFetchQuery>;
