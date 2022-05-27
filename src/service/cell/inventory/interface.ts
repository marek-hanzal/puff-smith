import {ICell, IWithCell, IWithCellType} from "@/puff-smith/service/cell/interface";
import {ITransaction, IWithTransaction} from "@/puff-smith/service/transaction/interface";
import {IWithVendor} from "@/puff-smith/service/vendor/interface";
import {IQuery, ISource} from "@leight-core/api";
import {CellInventory, Prisma} from "@prisma/client";

export interface ICellInventoryCreate {
	code?: string;
	cellId: string;
}

export interface ICellInventory {
	id: string;
	code: string;
	cell: ICell;
	cellId: string;
	transaction: ITransaction;
	transactionId: string;
}

export interface ICellInventoryQuery extends IQuery<Prisma.CellInventoryWhereInput, Prisma.CellInventoryOrderByWithRelationInput> {
}

export type ICellInventoryEntity<T = void> = T extends void ? CellInventory : CellInventory & T;
export type IWithCellInventory<T = void> = { CellInventory: ICellInventoryEntity<T>[]; };

export interface ICellInventorySource extends ISource<ICellInventoryCreate, ICellInventoryEntity<IWithCell<IWithVendor & IWithCellType> & IWithTransaction>, ICellInventory, ICellInventoryQuery> {
}
