import {IQuery, ISource} from "@leight-core/api";
import {Prisma, Tag} from "@prisma/client";

export interface ITagCreate {
	code: string;
	label?: string;
	group: string;
	sort?: number;
}

export interface ITag {
	id: string;
	code: string;
	label?: string | null;
	group: string | null;
	sort?: number | null;
}

export type ITagEntity = Tag;

export interface ITagQuery extends IQuery<Prisma.TagWhereInput, Prisma.TagOrderByWithRelationInput> {
}

export interface ITagSource extends ISource<ITagCreate, ITagEntity, ITag, ITagQuery> {
	fetchCodes(codes: string, group: string): Promise<ITagEntity[]>;

	fetchByCodes(codes: string[], group: string): Promise<ITagEntity[]>;

	fetchTag(group: string, code?: string, tagId?: string): Promise<ITagEntity>;
}
