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
	transaction: ITransaction;
}

export interface IAromaInventoryQuery extends IQuery<Prisma.AromaWhereInput, Prisma.AromaOrderByWithRelationInput> {
}

export interface IAromaInventoryFetchProps {
	aromaInventory: IAromaInventory;
}

export interface IAromaInventoryFetchQuery extends ParsedUrlQuery {
	aromaInventoryId: string;
}

export type IAromaInventoryService = IRepositoryService<IAromaInventoryCreate, AromaInventory, IAromaInventory, IAromaInventoryQuery, IAromaInventoryFetchProps, IAromaInventoryFetchQuery>;
