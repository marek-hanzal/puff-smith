import {IQuery, ISource, IWithSource} from "@leight-core/api";
import {Prisma, Tag} from "@prisma/client";
import {ParsedUrlQuery} from "querystring";

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

export interface ITagQuery extends IQuery<Prisma.TagWhereInput, Prisma.TagOrderByWithRelationInput> {
}

export interface ITagFetchProps {
	tag: ITag;
}

export interface ITagFetchQuery extends ParsedUrlQuery {
	tagId: string;
}

export interface ITagSource extends ISource<ITagCreate, Tag, ITag, ITagQuery> {
}

export interface ITagRepository extends IWithSource<ITagCreate, Tag, ITag, ITagQuery> {
	fetchCodes(codes: string, group: string): Promise<Tag[]>;

	fetchByCodes(codes: string[], group: string): Promise<Tag[]>;

	fetchTag(group: string, code?: string, tagId?: string): Promise<Tag>;
}
