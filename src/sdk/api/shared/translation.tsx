import {IQueryParams, ITranslationBundle} from "@leight-core/api";
import {createPromiseHook, createQueryHook, useLinkContext} from "@leight-core/client";

export const TranslationsApiLink = "/api/shared/translation";

export type ITranslationsQueryParams = IQueryParams;

export const useTranslationsQuery = createQueryHook<void, ITranslationBundle, ITranslationsQueryParams>(TranslationsApiLink, "get");

export const useTranslationsLink = (): ((query: ITranslationsQueryParams) => string) => {
	const linkContext = useLinkContext();
	return query => linkContext.link(TranslationsApiLink, query);
}

export const useTranslationsPromise = createPromiseHook<void, ITranslationBundle, ITranslationsQueryParams>(TranslationsApiLink, "get");
