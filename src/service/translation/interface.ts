import {ContainerClass} from "@/puff-smith/service/Container";
import {
	IQuery,
	ISource,
	ITranslation,
	IWithFulltext
}                       from "@leight-core/api";
import {
	Prisma,
	Translation
}                       from "@prisma/client";

export interface ITranslationCreate {
	language: string;
	label: string;
	text: string;
}

export interface ITranslationQuery extends IQuery<Prisma.TranslationWhereInput & IWithFulltext, Prisma.TranslationOrderByWithRelationInput> {
}

export type ITranslationEntity = Translation;

export interface ITranslationSource extends ISource<//
	ContainerClass,
	ITranslationEntity,
	ITranslation,
	ITranslationQuery,
	ITranslationCreate> {
}
