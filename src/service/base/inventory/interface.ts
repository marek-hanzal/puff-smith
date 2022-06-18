import {IBase, IWithBase} from "@/puff-smith/service/base/interface";
import {ITransaction, IWithNullTransaction} from "@/puff-smith/service/transaction/interface";
import {IWithVendor} from "@/puff-smith/service/vendor/interface";
import {IQuery, ISource, IWithFulltext} from "@leight-core/api";
import {BaseInventory, Prisma} from "@prisma/client";

export interface IBaseInventoryCreate {
	baseId: string;
	code?: string;
}

export interface IBaseInventory {
	id: string;
	code: string;
	base: IBase;
	baseId: string;
	transaction?: ITransaction | null;
	transactionId?: string | null;
	rating?: number | null;
}

export interface IBaseInventoryQuery extends IQuery<Prisma.BaseInventoryWhereInput & IWithFulltext, Prisma.BaseInventoryOrderByWithRelationInput> {
}

export type IBaseInventoryEntity<T = void> = T extends void ? BaseInventory : BaseInventory & T;

export interface IBaseInventorySource extends ISource<IBaseInventoryCreate, IBaseInventoryEntity<IWithBase<IWithVendor> & IWithNullTransaction>, IBaseInventory, IBaseInventoryQuery> {
}
