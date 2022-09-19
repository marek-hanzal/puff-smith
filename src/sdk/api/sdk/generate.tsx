/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {createMutationHook, createPromise, createPromiseHook, Form, IFormProps, IMobileFormProps, MobileForm, toLink} from "@leight-core/client";
import {FC} from "react";

export const GenerateApiLink = "/api/sdk/generate";

export type IGenerateQueryParams = any;

export const useGenerateMutation = createMutationHook<void, string[]>(GenerateApiLink, "post");

export interface IGenerateDefaultFormProps extends Partial<IFormProps<void, string[]>> {
}

export const GenerateDefaultForm: FC<IGenerateDefaultFormProps> = props => <Form<void, string[]>
	useMutation={useGenerateMutation}
	translation={GenerateApiLink}
	{...props}
/>;

export interface IGenerateDefaultMobileFormProps extends Partial<IMobileFormProps<void, string[]>> {
}

export const GenerateDefaultMobileForm: FC<IGenerateDefaultMobileFormProps> = props => <MobileForm<void, string[]>
	useMutation={useGenerateMutation}
	translation={GenerateApiLink}
	{...props}
/>;

export const toGenerateLink = (queryParams?: IGenerateQueryParams) => toLink(GenerateApiLink, queryParams);
export const useGenerateLink = () => toGenerateLink;

export const useGeneratePromise = createPromiseHook<void, string[]>(GenerateApiLink, "post");
export const createGeneratePromise = createPromise<void, string[]>(GenerateApiLink, "post");
