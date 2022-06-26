import {IQuery, ISource, IWithFulltext} from "@leight-core/api";
import {CellInfo, Prisma} from "@prisma/client";
import {ParsedUrlQuery} from "querystring";

export interface ICellInfoCreate {
	cellId: string;
	cellInventoryId: string;
	capacity?: number;
	voltage?: number;
}

export interface ICellInfoQuery extends IQuery<Prisma.CellInfoWhereInput & IWithFulltext, Prisma.CellInfoOrderByWithRelationInput> {
}

export type ICellInfoEntity<T = void> = T extends void ? CellInfo : CellInfo & T;
export type IWithCellInfo<T = void> = { cellInfo: ICellInfoEntity<T>; };

export interface ICellInfo {
	id: string;
	voltage?: number | null;
	capacity?: number | null;
	health?: number | null;
	created: string;
}

export interface ICellInfoFetch {
	cell: ICellInfo;
}

export interface ICellInfoFetchParams extends ParsedUrlQuery {
	cellId: string;
}

export type ICellInfoSourceEntity = ICellInfoEntity;

export interface ICellInfoSource extends ISource<ICellInfoCreate, ICellInfoSourceEntity, ICellInfo, ICellInfoQuery, ICellInfoFetch, ICellInfoFetchParams> {
}
