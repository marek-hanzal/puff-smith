import {IMixtureQuery} from "@/puff-smith/service/mixture/interface";
import {ITag, ITagEntity} from "@/puff-smith/service/tag/interface";
import {IQuery, ISource} from "@leight-core/api";
import {MixtureDraw, Prisma} from "@prisma/client";

export type IMixtureDrawEntity<T = any> = MixtureDraw & T;

export interface IMixtureDrawQuery extends IQuery<Prisma.MixtureDrawWhereInput, Prisma.MixtureDrawOrderByWithRelationInput> {
}

export interface IMixtureDrawSource extends ISource<undefined, { draw: ITagEntity }, ITag, IMixtureQuery> {
}
