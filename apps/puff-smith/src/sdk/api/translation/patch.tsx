/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {ITranslationSource} from "@/puff-smith/service/translation/interface";
import {
	createMutationHook,
	createPromise,
	createPromiseHook,
	Form,
	IFormProps,
	IMobileFormProps,
	MobileForm,
	SourceInfer,
	toLink
}                           from "@leight-core/viv";
import {FC}                 from "react";

export const TranslationPatchApiLink = "/api/translation/patch";

export type ITranslationPatchQueryParams = any;

export const useTranslationPatchMutation = createMutationHook<SourceInfer.Patch<ITranslationSource>, SourceInfer.Item<ITranslationSource>>(TranslationPatchApiLink, "post");

export interface ITranslationPatchDefaultFormProps extends Partial<IFormProps<SourceInfer.Patch<ITranslationSource>, SourceInfer.Item<ITranslationSource>>> {
}

export const TranslationPatchDefaultForm: FC<ITranslationPatchDefaultFormProps> = props => <Form<SourceInfer.Patch<ITranslationSource>, SourceInfer.Item<ITranslationSource>>
	useMutation={useTranslationPatchMutation}
	translation={TranslationPatchApiLink}
	{...props}
/>;

export interface ITranslationPatchDefaultMobileFormProps extends Partial<IMobileFormProps<SourceInfer.Patch<ITranslationSource>, SourceInfer.Item<ITranslationSource>>> {
}

export const TranslationPatchDefaultMobileForm: FC<ITranslationPatchDefaultMobileFormProps> = props => <MobileForm<SourceInfer.Patch<ITranslationSource>, SourceInfer.Item<ITranslationSource>>
	useMutation={useTranslationPatchMutation}
	translation={TranslationPatchApiLink}
	{...props}
/>;

export const toTranslationPatchLink  = (queryParams?: ITranslationPatchQueryParams) => toLink(TranslationPatchApiLink, queryParams);
export const useTranslationPatchLink = () => toTranslationPatchLink;

export const useTranslationPatchPromise = createPromiseHook<SourceInfer.Patch<ITranslationSource>, SourceInfer.Item<ITranslationSource>>(TranslationPatchApiLink, "post");

export const TranslationPatchPromise = createPromise<SourceInfer.Patch<ITranslationSource>, SourceInfer.Item<ITranslationSource>>(TranslationPatchApiLink, "post");
