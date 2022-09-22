import {IQuery, ISource, ITranslation, IWithFulltext} from "@leight-core/api";
import {Prisma, Translation} from "@prisma/client";
import {ParsedUrlQuery} from "querystring";

export interface ITranslationCreate {
	language: string;
	label: string;
	text: string;
}

export interface ITranslationQuery extends IQuery<Prisma.TranslationWhereInput & IWithFulltext, Prisma.TranslationOrderByWithRelationInput> {
}

export type ITranslationEntity = Translation;

export interface ITranslationFetchProps {
	translation: ITranslation;
}

export interface ITranslationFetchQuery extends ParsedUrlQuery {
	translationId: string;
}

export interface ITranslationFetch {
	translation: ITranslation;
}

export interface ITranslationFetchParams extends ParsedUrlQuery {
	translationId: string;
}

export interface ITranslationSource extends ISource<ITranslationCreate, ITranslationEntity, ITranslation, ITranslationQuery, ITranslationFetch, ITranslationFetchParams> {
}
