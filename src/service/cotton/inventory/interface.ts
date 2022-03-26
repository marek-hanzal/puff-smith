import {CottonInventory, Prisma} from "@prisma/client";
import {IQuery, IRepositoryService} from "@leight-core/api";
import {ITransaction} from "@/puff-smith/service/transaction";
import {ICotton} from "@/puff-smith/service/cotton";
import {ParsedUrlQuery} from "querystring";

export interface ICottonInventoryCreate {
	userId: string;
	cottonId: string;
}

export interface ICottonInventory {
	id: string;
	cotton: ICotton;
	transaction: ITransaction;
}

export interface ICottonInventoryQuery extends IQuery<Prisma.CottonInventoryWhereInput, Prisma.CottonInventoryOrderByWithRelationInput> {
}

export interface ICottonInventoryFetchProps {
	cottonTransaction: ICottonInventory;
}

export interface ICottonInventoryFetchQuery extends ParsedUrlQuery {
	cottonTransactionId: string;
}

export type ICottonInventoryService = IRepositoryService<ICottonInventoryCreate, CottonInventory, ICottonInventory, ICottonInventoryQuery, ICottonInventoryFetchProps, ICottonInventoryFetchQuery>;
