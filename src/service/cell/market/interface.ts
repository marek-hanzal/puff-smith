import {IServiceCreate} from "@/puff-smith/service";
import {ICell} from "@/puff-smith/service/cell/interface";
import {IQuery, ISource} from "@leight-core/api";
import {Cell, Prisma} from "@prisma/client";

export interface ICellMarket {
	cell: ICell;
	isOwned: boolean | undefined;
}

export interface ICellMarketQuery extends IQuery<Prisma.CellWhereInput, Prisma.CellOrderByWithRelationInput> {
}

export interface ICellMarketSourceCreate extends IServiceCreate {
}

export interface ICellMarketSource extends ISource<void, Cell, ICellMarket, ICellMarketQuery, void, {}> {
}
