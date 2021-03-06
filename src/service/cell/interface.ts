import {ITag, ITagEntity} from "@/puff-smith/service/tag/interface";
import {IVendor, IWithVendor} from "@/puff-smith/service/vendor/interface";
import {IQuery, ISource, IWithFulltext} from "@leight-core/api";
import {Cell, Prisma} from "@prisma/client";
import {ParsedUrlQuery} from "querystring";

export interface ICellCreate {
	name: string;
	code?: string;
	vendor?: string;
	vendorId?: string;
	voltage: number;
	voltageMax?: number;
	cost: number;
	drain?: number;
	ohm?: number;
	type?: string;
	typeId?: string;
	withInventory?: boolean;
}

export interface ICellQuery extends IQuery<Prisma.CellWhereInput & IWithFulltext, Prisma.CellOrderByWithRelationInput> {
}

export type ICellEntity<T = void> = T extends void ? Cell : Cell & T;
export type IWithCell<T = void> = { cell: ICellEntity<T>; };
export type IWithCellType = { type: ITagEntity; };

export interface ICell {
	id: string;
	name: string;
	code: string;
	vendor: IVendor;
	vendorId: string;
	voltage: number;
	voltageMax?: number | null;
	cost: number;
	drain?: number | null;
	capacity?: number | null;
	ohm?: number | null;
	type: ITag;
	typeId: string;
}

export interface ICellFetch {
	cell: ICell;
}

export interface ICellFetchParams extends ParsedUrlQuery {
	cellId: string;
}

export type ICellSourceEntity = ICellEntity<IWithVendor & IWithCellType>;

export interface ICellSource extends ISource<ICellCreate, ICellSourceEntity, ICell, ICellQuery, ICellFetch, ICellFetchParams> {
	fetchCells(cells: string): Promise<ICellEntity[]>;
}
