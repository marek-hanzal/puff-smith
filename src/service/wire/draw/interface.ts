import {ITag, ITagEntity} from "@/puff-smith/service/tag/interface";
import {IQuery, ISource} from "@leight-core/api";
import {Prisma, WireDraw} from "@prisma/client";

export interface IWireDrawQuery extends IQuery<Prisma.WireDrawWhereInput, Prisma.WireDrawOrderByWithRelationInput> {
}

export type IWireDrawEntity<T = void> = T extends void ? WireDraw : WireDraw & T;
export type IWithWireDraw = { draw: ITagEntity };

export interface IWireDrawSource extends ISource<undefined, IWithWireDraw, ITag, IWireDrawQuery> {
}
