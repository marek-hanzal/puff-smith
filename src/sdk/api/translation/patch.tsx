/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {ITranslationSource} from "@/puff-smith/service/translation/interface";
import {ISourceItem, ISourcePatch} from "@leight-core/api";
import {createMutationHook, createPromise, createPromiseHook, Form, IFormProps, IMobileFormProps, MobileForm, toLink} from "@leight-core/client";
import {FC} from "react";

export const TranslationPatchApiLink = "/api/translation/patch";

export type ITranslationPatchQueryParams = any;

export const useTranslationPatchMutation = createMutationHook<ISourcePatch<ITranslationSource>, ISourceItem<ITranslationSource>>(TranslationPatchApiLink, "post");

export interface ITranslationPatchDefaultFormProps extends Partial<IFormProps<ISourcePatch<ITranslationSource>, ISourceItem<ITranslationSource>>> {
}

export const TranslationPatchDefaultForm: FC<ITranslationPatchDefaultFormProps> = props => <Form<ISourcePatch<ITranslationSource>, ISourceItem<ITranslationSource>>
	useMutation={useTranslationPatchMutation}
	translation={TranslationPatchApiLink}
	{...props}
/>;

export interface ITranslationPatchDefaultMobileFormProps extends Partial<IMobileFormProps<ISourcePatch<ITranslationSource>, ISourceItem<ITranslationSource>>> {
}

export const TranslationPatchDefaultMobileForm: FC<ITranslationPatchDefaultMobileFormProps> = props => <MobileForm<ISourcePatch<ITranslationSource>, ISourceItem<ITranslationSource>>
	useMutation={useTranslationPatchMutation}
	translation={TranslationPatchApiLink}
	{...props}
/>;

export const toTranslationPatchLink = (queryParams?: ITranslationPatchQueryParams) => toLink(TranslationPatchApiLink, queryParams);
export const useTranslationPatchLink = () => toTranslationPatchLink;

export const useTranslationPatchPromise = createPromiseHook<ISourcePatch<ITranslationSource>, ISourceItem<ITranslationSource>>(TranslationPatchApiLink, "post");

export const TranslationPatchPromise = createPromise<ISourcePatch<ITranslationSource>, ISourceItem<ITranslationSource>>(TranslationPatchApiLink, "post");
