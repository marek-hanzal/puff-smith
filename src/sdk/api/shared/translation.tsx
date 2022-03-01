import {createGetQuery, useGetPromise} from "@leight-core/source";
import {useLinkContext} from "@leight-core/link";
import {AxiosRequestConfig} from "axios";
import {ITranslations} from "@leight-core/api";

export const TranslationsApiLink = "/api/shared/translation";

export type ITranslationsQueryParams = void;

export const useTranslationsQuery = createGetQuery<ITranslationsQueryParams, ITranslations>(TranslationsApiLink);

export const useTranslationsLink = (): ((query: ITranslationsQueryParams) => string) => {
	const linkContext = useLinkContext();
	return query => linkContext.link(TranslationsApiLink, query);
}

export const useTranslationsPromise = (query: ITranslationsQueryParams, config?: AxiosRequestConfig) => {
	return useGetPromise<ITranslationsQueryParams, ITranslations>(TranslationsApiLink, query, config);
}
