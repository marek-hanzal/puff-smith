import {ITag, ITagEntity} from "@/puff-smith/service/tag/interface";
import {IQuery, ISource} from "@leight-core/api";
import {MixtureDraw, Prisma} from "@prisma/client";

export type IMixtureDrawEntity = MixtureDraw & { draw: ITagEntity };

export interface IMixtureDrawQuery extends IQuery<Prisma.MixtureDrawWhereInput, Prisma.MixtureDrawOrderByWithRelationInput> {
}

export interface IMixtureDrawSource extends ISource<undefined, IMixtureDrawEntity, ITag, IMixtureDrawQuery> {
}
