/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {ITranslationSource} from "@/puff-smith/service/translation/interface";
import {ISourceItem} from "@leight-core/api";
import {createMutationHook, createPromise, createPromiseHook, toLink} from "@leight-core/client";

export const TranslationDeleteApiLink = "/api/translation/delete";

export type ITranslationDeleteQueryParams = any;

export const useTranslationDeleteMutation = createMutationHook<string[], ISourceItem<ITranslationSource>, ITranslationDeleteQueryParams>(TranslationDeleteApiLink, "post");

export const toTranslationDeleteLink = (queryParams?: ITranslationDeleteQueryParams) => toLink(TranslationDeleteApiLink, queryParams);
export const useTranslationDeleteLink = () => toTranslationDeleteLink;

export const useTranslationDeletePromise = createPromiseHook<string[], ISourceItem<ITranslationSource>, ITranslationDeleteQueryParams>(TranslationDeleteApiLink, "post");

export const TranslationDeletePromise = createPromise<string[], ISourceItem<ITranslationSource>, ITranslationDeleteQueryParams>(TranslationDeleteApiLink, "post");
