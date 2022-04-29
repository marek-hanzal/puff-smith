import {IServiceCreate} from "@/puff-smith/service";
import {ICotton} from "@/puff-smith/service/cotton/interface";
import {ITransaction} from "@/puff-smith/service/transaction/interface";
import {IQuery, IRepositoryService} from "@leight-core/api";
import {CottonInventory, Prisma} from "@prisma/client";
import {ParsedUrlQuery} from "querystring";

export interface ICottonInventoryCreate {
	userId: string;
	cottonId: string;
}

export interface ICottonInventory {
	id: string;
	cotton: ICotton;
	cottonId: string;
	transaction: ITransaction;
	transactionId: string;
}

export interface ICottonInventoryQuery extends IQuery<Prisma.CottonInventoryWhereInput, Prisma.CottonInventoryOrderByWithRelationInput> {
}

export interface ICottonInventoryFetchProps {
	cottonTransaction: ICottonInventory;
}

export interface ICottonInventoryFetchQuery extends ParsedUrlQuery {
	cottonTransactionId: string;
}

export interface ICottonInventoryServiceCreate extends IServiceCreate {
}

export interface ICottonInventoryService extends IRepositoryService<ICottonInventoryCreate, CottonInventory, ICottonInventory, ICottonInventoryQuery, ICottonInventoryFetchProps, ICottonInventoryFetchQuery> {
}
