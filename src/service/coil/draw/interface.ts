import {ICoilQuery} from "@/puff-smith/service/coil/interface";
import {ITag, ITagEntity} from "@/puff-smith/service/tag/interface";
import {ISource} from "@leight-core/api";
import {CoilDraw} from "@prisma/client";

export type ICoilDrawEntity = CoilDraw & { draw: ITagEntity };

export interface ICoilDrawSource extends ISource<undefined, ICoilDrawEntity, ITag, ICoilQuery> {
}
