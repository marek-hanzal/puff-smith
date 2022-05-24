import {IAroma, IWithAromaEntity} from "@/puff-smith/service/aroma/interface";
import {ITransaction} from "@/puff-smith/service/transaction/interface";
import {IQuery, ISource} from "@leight-core/api";
import {AromaInventory, Prisma} from "@prisma/client";

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

export interface IAromaInventoryQuery extends IQuery<Prisma.AromaInventoryWhereInput, Prisma.AromaInventoryOrderByWithRelationInput> {
}

export type IAromaInventoryEntity = AromaInventory & IWithAromaEntity;

export interface IAromaInventorySource extends ISource<IAromaInventoryCreate, IAromaInventoryEntity, IAromaInventory, IAromaInventoryQuery> {
}
