import {ICell} from "@/puff-smith/service/cell";
import {IQuery, IRepositoryService} from "@leight-core/api";
import {Cell, Prisma} from "@prisma/client";

export interface ICellMarket {
	cell: ICell;
	isOwned: boolean | undefined;
}

export interface ICellMarketQuery extends IQuery<Prisma.CellWhereInput, Prisma.CellOrderByWithRelationInput> {
}

export interface ICellMarketService extends IRepositoryService<void, Cell, ICellMarket, ICellMarketQuery, void, {}> {
}
