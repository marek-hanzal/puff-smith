import {ICell, IWithCell, IWithCellType} from "@/puff-smith/service/cell/interface";
import {ITransaction, IWithNullTransaction} from "@/puff-smith/service/transaction/interface";
import {IWithVendor} from "@/puff-smith/service/vendor/interface";
import {IQuery, ISource, IWithFulltext} from "@leight-core/api";
import {CellInventory, Prisma} from "@prisma/client";
import {ParsedUrlQuery} from "querystring";

export interface ICellInventoryCreate {
	code?: string;
	cellId: string;
}

export interface ICellInventory {
	id: string;
	code: string;
	cell: ICell;
	cellId: string;
	transaction?: ITransaction | null;
	transactionId?: string | null;
	rating?: number | null;
}

export interface ICellInventoryQuery extends IQuery<Prisma.CellInventoryWhereInput & IWithFulltext, Prisma.CellInventoryOrderByWithRelationInput> {
}

export type ICellInventoryEntity<T = void> = T extends void ? CellInventory : CellInventory & T;
export type IWithCellInventory<T = void> = { CellInventory: ICellInventoryEntity<T>[]; };

export interface ICellInventoryFetch {
	cellInventory: ICellInventory;
}

export interface ICellInventoryFetchParams extends ParsedUrlQuery {
	cellInventoryId: string;
}

export type ICellInventorySourceEntity = ICellInventoryEntity<IWithCell<IWithVendor & IWithCellType> & IWithNullTransaction>;

export interface ICellInventorySource extends ISource<ICellInventoryCreate, ICellInventorySourceEntity, ICellInventory, ICellInventoryQuery, ICellInventoryFetch, ICellInventoryFetchParams> {
}
