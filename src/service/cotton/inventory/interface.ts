import {IServiceCreate} from "@/puff-smith/service";
import {ICotton} from "@/puff-smith/service/cotton/interface";
import {ITransaction} from "@/puff-smith/service/transaction/interface";
import {IDeleteRequest, IQuery, IRepositoryService} from "@leight-core/api";
import {CottonInventory, Prisma} from "@prisma/client";
import {ParsedUrlQuery} from "querystring";

export interface ICottonInventoryCreate {
	cottonId: string;
	code?: string;
}

export interface ICottonInventory {
	id: string;
	code: string;
	cotton: ICotton;
	cottonId: string;
	transaction: ITransaction;
	transactionId: string;
}

export interface ICottonInventoryDelete extends IDeleteRequest {
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
	handleDelete(request: { request: ICottonInventoryDelete }): Promise<ICottonInventory[]>;
}
