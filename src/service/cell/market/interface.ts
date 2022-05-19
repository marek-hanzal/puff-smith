import {IServiceCreate} from "@/puff-smith/service";
import {ICell} from "@/puff-smith/service/cell/interface";
import {IQuery, IRepository} from "@leight-core/api";
import {Cell, Prisma} from "@prisma/client";

export interface ICellMarket {
	cell: ICell;
	isOwned: boolean | undefined;
}

export interface ICellMarketQuery extends IQuery<Prisma.CellWhereInput, Prisma.CellOrderByWithRelationInput> {
}

export interface ICellMarketRepositoryCreate extends IServiceCreate {
}

export interface ICellMarketRepository extends IRepository<void, Cell, ICellMarket, ICellMarketQuery, void, {}> {
}
