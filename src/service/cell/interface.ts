import {ITag, ITagEntity} from "@/puff-smith/service/tag/interface";
import {IVendor, IWithVendorEntity} from "@/puff-smith/service/vendor/interface";
import {IQuery, ISource, IWithFulltext} from "@leight-core/api";
import {Cell, Prisma} from "@prisma/client";
import {ParsedUrlQuery} from "querystring";

export interface ICellCreate {
	name: string;
	code?: string;
	vendor: string;
	voltage: number;
	cost: number;
	drain?: number;
	ohm?: number;
	type: string;
}

export type ICellWhere = Prisma.CellWhereInput & IWithFulltext;

export interface ICellQuery extends IQuery<ICellWhere, Prisma.CellOrderByWithRelationInput> {
}

export type ICellEntity = Cell & IWithVendorEntity & { type: ITagEntity };
export type IWithCellEntity = { cell: ICellEntity; };

export interface ICell {
	id: string;
	name: string;
	code: string;
	vendor: IVendor;
	vendorId: string;
	voltage: number;
	cost: number;
	drain?: number | null;
	ohm?: number | null;
	type: ITag;
	typeId: string;
}

export interface ICellFetchProps {
	cell: ICell;
}

export interface ICellFetchQuery extends ParsedUrlQuery {
	cellId: string;
}

export interface ICellSource extends ISource<ICellCreate, ICellEntity, ICell, ICellQuery> {
	fetchCells(cells: string): Promise<ICellEntity[]>;
}
