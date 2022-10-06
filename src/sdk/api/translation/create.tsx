/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {ITranslationSource} from "@/puff-smith/service/translation/interface";
import {SourceInfer}        from "@leight-core/api";
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

export const useTranslationCreateMutation = createMutationHook<SourceInfer.Create<ITranslationSource>, SourceInfer.Item<ITranslationSource>>(TranslationCreateApiLink, "post");

export interface ITranslationCreateDefaultFormProps extends Partial<IFormProps<SourceInfer.Create<ITranslationSource>, SourceInfer.Item<ITranslationSource>>> {
}

export const TranslationCreateDefaultForm: FC<ITranslationCreateDefaultFormProps> = props => <Form<SourceInfer.Create<ITranslationSource>, SourceInfer.Item<ITranslationSource>>
	useMutation={useTranslationCreateMutation}
	translation={TranslationCreateApiLink}
	{...props}
/>;

export interface ITranslationCreateDefaultMobileFormProps extends Partial<IMobileFormProps<SourceInfer.Create<ITranslationSource>, SourceInfer.Item<ITranslationSource>>> {
}

export const TranslationCreateDefaultMobileForm: FC<ITranslationCreateDefaultMobileFormProps> = props => <MobileForm<SourceInfer.Create<ITranslationSource>, SourceInfer.Item<ITranslationSource>>
	useMutation={useTranslationCreateMutation}
	translation={TranslationCreateApiLink}
	{...props}
/>;

export const toTranslationCreateLink = (queryParams?: ITranslationCreateQueryParams) => toLink(TranslationCreateApiLink, queryParams);
export const useTranslationCreateLink = () => toTranslationCreateLink;

export const useTranslationCreatePromise = createPromiseHook<SourceInfer.Create<ITranslationSource>, SourceInfer.Item<ITranslationSource>>(TranslationCreateApiLink, "post");

export const TranslationCreatePromise = createPromise<SourceInfer.Create<ITranslationSource>, SourceInfer.Item<ITranslationSource>>(TranslationCreateApiLink, "post");
