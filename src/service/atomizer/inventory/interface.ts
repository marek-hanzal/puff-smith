import {AtomizerInventory, Prisma} from "@prisma/client";
import {IQuery, IRepositoryService} from "@leight-core/api";
import {IAtomizer} from "@/puff-smith/service/atomizer";
import {ParsedUrlQuery} from "querystring";
import {ITransaction} from "@/puff-smith/service/transaction";

export interface IAtomizerInventoryCreate {
	userId: string;
	atomizerId: string;
}

export interface IAtomizerInventory {
	id: string;
	atomizer: IAtomizer;
	transaction: ITransaction;
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
