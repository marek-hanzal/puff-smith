import {ITag, ITagEntity} from "@/puff-smith/service/tag/interface";
import {IQuery, ISource} from "@leight-core/api";
import {ModCell, Prisma} from "@prisma/client";

export interface IModCellQuery extends IQuery<Prisma.ModCellWhereInput, Prisma.ModCellOrderByWithRelationInput> {
}

export type IModCellEntity<T = void> = T extends void ? ModCell : ModCell & T;
export type IWithModCell = { ModCell: { cell: ITagEntity }[] };

export interface IModCellSource extends ISource<undefined, IModCellEntity<{ cell: ITagEntity }>, ITag, IModCellQuery> {
}
