import {IServiceCreate} from "@/puff-smith/service";
import {IAtomizer} from "@/puff-smith/service/atomizer/interface";
import {ITransaction} from "@/puff-smith/service/transaction/interface";
import {IQuery, ISource} from "@leight-core/api";
import {AtomizerInventory, Prisma} from "@prisma/client";
import {ParsedUrlQuery} from "querystring";

export interface IAtomizerInventoryCreate {
	atomizerId: string;
	code?: string;
}

export interface IAtomizerInventory {
	id: string;
	code: string;
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

export interface IAtomizerInventorySourceCreate extends IServiceCreate {
}

export interface IAtomizerInventorySource extends ISource<IAtomizerInventoryCreate, AtomizerInventory, IAtomizerInventory, IAtomizerInventoryQuery, IAtomizerInventoryFetchProps, IAtomizerInventoryFetchQuery> {
}
