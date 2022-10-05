/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {ITranslationCreate} from "@/puff-smith/service/translation/interface";
import {ITranslation}       from "@leight-core/api";
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

export const TranslationPushApiLink = "/api/translation/push";

export type ITranslationPushQueryParams = any;

export const useTranslationPushMutation = createMutationHook<ITranslationCreate, ITranslation>(TranslationPushApiLink, "post");

export interface ITranslationPushDefaultFormProps extends Partial<IFormProps<ITranslationCreate, ITranslation>> {
}

export const TranslationPushDefaultForm: FC<ITranslationPushDefaultFormProps> = props => <Form<ITranslationCreate, ITranslation>
	useMutation={useTranslationPushMutation}
	translation={TranslationPushApiLink}
	{...props}
/>

export interface ITranslationPushDefaultMobileFormProps extends Partial<IMobileFormProps<ITranslationCreate, ITranslation>> {
}

export const TranslationPushDefaultMobileForm: FC<ITranslationPushDefaultMobileFormProps> = props => <MobileForm<ITranslationCreate, ITranslation>
	useMutation={useTranslationPushMutation}
	translation={TranslationPushApiLink}
	{...props}
/>

export const toTranslationPushLink = (queryParams?: ITranslationPushQueryParams) => toLink(TranslationPushApiLink, queryParams);
export const useTranslationPushLink = () => toTranslationPushLink;

export const useTranslationPushPromise = createPromiseHook<ITranslationCreate, ITranslation>(TranslationPushApiLink, "post");
export const createTranslationPushPromise = createPromise<ITranslationCreate, ITranslation>(TranslationPushApiLink, "post");
