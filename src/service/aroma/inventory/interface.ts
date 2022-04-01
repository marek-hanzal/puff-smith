import {AromaInventory, Prisma} from "@prisma/client";
import {IQuery, IRepositoryService} from "@leight-core/api";
import {IAroma} from "@/puff-smith/service/aroma";
import {ParsedUrlQuery} from "querystring";
import {ITransaction} from "@/puff-smith/service/transaction";

export interface IAromaInventoryCreate {
	userId: string;
	aromaId: string;
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

export interface IAromaInventoryService extends IRepositoryService<IAromaInventoryCreate, AromaInventory, IAromaInventory, IAromaInventoryQuery, IAromaInventoryFetchProps, IAromaInventoryFetchQuery> {
}
