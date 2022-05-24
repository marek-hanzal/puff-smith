import {IAtomizerQuery} from "@/puff-smith/service/atomizer/interface";
import {ITag, ITagEntity} from "@/puff-smith/service/tag/interface";
import {ISource} from "@leight-core/api";
import {AtomizerDraw} from "@prisma/client";

export type IAtomizerDrawEntity = AtomizerDraw & { draw: ITagEntity };

export interface IAtomizerDrawSource extends ISource<undefined, IAtomizerDrawEntity, ITag, IAtomizerQuery> {
}
