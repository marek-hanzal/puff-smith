import {IQuery, ISource, ITag} from "@leight-core/api";
import {Prisma, Tag} from "@prisma/client";

export interface ITagCreate extends Omit<ITag, "id"> {
}

export type ITagEntity = Tag;

export interface ITagQuery extends IQuery<Prisma.TagWhereInput, Prisma.TagOrderByWithRelationInput> {
}

export interface ITagSource extends ISource<ITagCreate, ITagEntity, ITag, ITagQuery> {
	fetchByTags(tags: string | string[] | undefined, group: string): Promise<ITagEntity[]>;

	fetchTag(group: string, tag?: string, tagId?: string): Promise<ITagEntity>;
}
