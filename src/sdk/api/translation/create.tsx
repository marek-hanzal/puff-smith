/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {ITranslationSource} from "@/puff-smith/service/translation/interface";
import {
	ISourceCreate,
	ISourceItem
}                           from "@leight-core/api";
import {
	createMutationHook,
	createPromise,
	createPromiseHook,
	Form,
	IFormProps,
	IMobileFormProps,
	MobileForm,
	toLink
}                           from "@leight-core/client";
import {FC}                 from "react";

export const TranslationCreateApiLink = "/api/translation/create";

export type ITranslationCreateQueryParams = any;

export const useTranslationCreateMutation = createMutationHook<ISourceCreate<ITranslationSource>, ISourceItem<ITranslationSource>>(TranslationCreateApiLink, "post");

export interface ITranslationCreateDefaultFormProps extends Partial<IFormProps<ISourceCreate<ITranslationSource>, ISourceItem<ITranslationSource>>> {
}

export const TranslationCreateDefaultForm: FC<ITranslationCreateDefaultFormProps> = props => <Form<ISourceCreate<ITranslationSource>, ISourceItem<ITranslationSource>>
	useMutation={useTranslationCreateMutation}
	translation={TranslationCreateApiLink}
	{...props}
/>

export interface ITranslationCreateDefaultMobileFormProps extends Partial<IMobileFormProps<ISourceCreate<ITranslationSource>, ISourceItem<ITranslationSource>>> {
}

export const TranslationCreateDefaultMobileForm: FC<ITranslationCreateDefaultMobileFormProps> = props => <MobileForm<ISourceCreate<ITranslationSource>, ISourceItem<ITranslationSource>>
	useMutation={useTranslationCreateMutation}
	translation={TranslationCreateApiLink}
	{...props}
/>

export const toTranslationCreateLink = (queryParams?: ITranslationCreateQueryParams) => toLink(TranslationCreateApiLink, queryParams);
export const useTranslationCreateLink = () => toTranslationCreateLink;

export const useTranslationCreatePromise = createPromiseHook<ISourceCreate<ITranslationSource>, ISourceItem<ITranslationSource>>(TranslationCreateApiLink, "post");

export const TranslationCreatePromise = createPromise<ISourceCreate<ITranslationSource>, ISourceItem<ITranslationSource>>(TranslationCreateApiLink, "post");
