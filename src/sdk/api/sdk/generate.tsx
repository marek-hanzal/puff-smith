/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {createMutationHook, createPromise, createPromiseHook, Form, IFormProps, toLink} from "@leight-core/client";
import {FC} from "react";

export const GenerateApiLink = "/api/sdk/generate";

export type IGenerateQueryParams = any;

export const useGenerateMutation = createMutationHook<void, string[]>(GenerateApiLink, "post");

export interface IGenerateDefaultFormProps extends Partial<IFormProps<void, string[]>> {
}

export const GenerateDefaultForm: FC<IGenerateDefaultFormProps> = props => <Form<void, string[]>
	useMutation={useGenerateMutation}
	{...props}
/>

export const toGenerateLink = (queryParams?: IGenerateQueryParams) => toLink(GenerateApiLink, queryParams);
export const useGenerateLink = () => toGenerateLink;

export const useGeneratePromise = createPromiseHook<void, string[]>(GenerateApiLink, "post");

export const GeneratePromise = createPromise<void, string[]>(GenerateApiLink, "post");
