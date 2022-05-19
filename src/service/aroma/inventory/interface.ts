import {IServiceCreate} from "@/puff-smith/service";
import {IAroma} from "@/puff-smith/service/aroma/interface";
import {ITransaction} from "@/puff-smith/service/transaction/interface";
import {IDeleteRequest, IQuery, IRepository} from "@leight-core/api";
import {AromaInventory, Prisma} from "@prisma/client";
import {ParsedUrlQuery} from "querystring";

export interface IAromaInventoryCreate {
	aromaId: string;
	code?: string;
}

export interface IAromaInventory {
	id: string;
	code: string;
	aroma: IAroma;
	aromaId: string;
	transaction: ITransaction;
	transactionId: string;
}

export interface IAromaInventoryDelete extends IDeleteRequest {
}

export interface IAromaInventoryQuery extends IQuery<Prisma.AromaInventoryWhereInput, Prisma.AromaInventoryOrderByWithRelationInput> {
}

export interface IAromaInventoryFetchProps {
	aromaInventory: IAromaInventory;
}

export interface IAromaInventoryFetchQuery extends ParsedUrlQuery {
	aromaInventoryId: string;
}

export interface IAromaInventoryRepositoryCreate extends IServiceCreate {
}

export interface IAromaInventoryRepository extends IRepository<IAromaInventoryCreate, AromaInventory, IAromaInventory, IAromaInventoryQuery, IAromaInventoryFetchProps, IAromaInventoryFetchQuery> {
	handleDelete(request: { request: IAromaInventoryDelete }): Promise<IAromaInventory[]>;
}
