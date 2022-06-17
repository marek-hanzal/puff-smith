import {IAroma, IWithAroma, IWithAromaTaste} from "@/puff-smith/service/aroma/interface";
import {ITransaction, IWithNullTransaction} from "@/puff-smith/service/transaction/interface";
import {IWithVendor} from "@/puff-smith/service/vendor/interface";
import {IQuery, ISource, IWithFulltext} from "@leight-core/api";
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
	transaction?: ITransaction | null;
	transactionId?: string | null;
}

export interface IAromaInventoryQuery extends IQuery<Prisma.AromaInventoryWhereInput & IWithFulltext, Prisma.AromaInventoryOrderByWithRelationInput> {
}

export type IAromaInventoryEntity<T = void> = T extends void ? AromaInventory : AromaInventory & T;

export interface IAromaInventorySource extends ISource<IAromaInventoryCreate, IAromaInventoryEntity<IWithAroma<IWithVendor & IWithAromaTaste> & IWithNullTransaction>, IAromaInventory, IAromaInventoryQuery> {
}
