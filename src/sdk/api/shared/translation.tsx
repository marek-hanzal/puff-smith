import {createPromiseHook, createQueryHook} from "@leight-core/source";
import {useLinkContext} from "@leight-core/link";
import {ITranslations} from "@leight-core/api";

export const TranslationsApiLink = "/api/shared/translation";

export type ITranslationsQueryParams = void;

export const useTranslationsQuery = createQueryHook<void, ITranslations, ITranslationsQueryParams>(TranslationsApiLink, "get");

export const useTranslationsLink = (): ((query: ITranslationsQueryParams) => string) => {
	const linkContext = useLinkContext();
	return query => linkContext.link(TranslationsApiLink, query);
}

export const useTranslationsPromise = createPromiseHook<void, ITranslations, ITranslationsQueryParams>(TranslationsApiLink, "get");
