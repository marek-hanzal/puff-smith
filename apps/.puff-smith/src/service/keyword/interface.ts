import {ContainerClass} from "@/puff-smith/service/Container";
import {
    IQuery,
    ISource,
    IWithFulltext
}                       from "@leight-core/viv";
import {
    Keyword,
    Prisma
}                       from "@prisma/client";

export type IKeywordEntity = Keyword;

export type IKeyword = Keyword;

export interface IKeywordCreate extends Omit<Keyword, "id"> {
}

export type IKeywordQuery = IQuery<Prisma.KeywordWhereInput & IWithFulltext, Prisma.KeywordOrderByWithRelationInput>;

export interface IKeywordSource extends ISource<//
	ContainerClass,
	IKeywordEntity,
	IKeyword,
	IKeywordQuery,
	IKeywordCreate> {
}
