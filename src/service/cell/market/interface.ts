import {IServiceCreate} from "@/puff-smith/service";
import {ICell} from "@/puff-smith/service/cell/interface";
import {IQuery, IRepositoryService} from "@leight-core/api";
import {Cell, Prisma} from "@prisma/client";

export interface ICellMarket {
	cell: ICell;
	isOwned: boolean | undefined;
}

export interface ICellMarketQuery extends IQuery<Prisma.CellWhereInput, Prisma.CellOrderByWithRelationInput> {
}

export interface ICellMarketServiceCreate extends IServiceCreate {
}

export interface ICellMarketService extends IRepositoryService<void, Cell, ICellMarket, ICellMarketQuery, void, {}> {
}
