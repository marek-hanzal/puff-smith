import {IQuery} from "@leight-core/api";
import {Prisma} from "@prisma/client";

export interface ITranslationCreate {
	language: string;
	label: string;
	text: string;
}

export type ITranslationFilter = Prisma.TranslationWhereInput;
export type ITranslationOrderBy = Prisma.TranslationOrderByWithRelationInput;

export interface ITranslationQuery extends IQuery<ITranslationFilter, ITranslationOrderBy> {
}
