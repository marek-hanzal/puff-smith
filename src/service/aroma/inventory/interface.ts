import {IServiceCreate} from "@/puff-smith/service";
import {IAroma} from "@/puff-smith/service/aroma/interface";
import {ITransaction} from "@/puff-smith/service/transaction/interface";
import {IQuery, IRepositoryService} from "@leight-core/api";
import {AromaInventory, Prisma} from "@prisma/client";
import {ParsedUrlQuery} from "querystring";

export interface IAromaInventoryCreate {
	aromaId: string;
}

export interface IAromaInventoryDelete {
	ids: string[];
}

export interface IAromaInventory {
	id: string;
	aroma: IAroma;
	aromaId: string;
	transaction: ITransaction;
	transactionId: string;
}

export interface IAromaInventoryQuery extends IQuery<Prisma.AromaInventoryWhereInput, Prisma.AromaInventoryOrderByWithRelationInput> {
}

export interface IAromaInventoryFetchProps {
	aromaInventory: IAromaInventory;
}

export interface IAromaInventoryFetchQuery extends ParsedUrlQuery {
	aromaInventoryId: string;
}

export interface IAromaInventoryServiceCreate extends IServiceCreate {
}

export interface IAromaInventoryService extends IRepositoryService<IAromaInventoryCreate, AromaInventory, IAromaInventory, IAromaInventoryQuery, IAromaInventoryFetchProps, IAromaInventoryFetchQuery> {
	handleDelete(request: { request: IAromaInventoryDelete }): Promise<IAromaInventory[]>;
}
