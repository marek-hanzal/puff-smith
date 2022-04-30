/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {Endpoint, GenerateEndpoint} from "@leight-core/server";
import {FC} from "react";
import {IQueryParams} from "@leight-core/api";
import {useQueryClient} from "react-query";
import {Form, IFormProps, ISourceProviderProps, createMutationHook, createPromise, createPromiseHook, createQueryHook, toLink, useSourceContext} from "@leight-core/client";

export const GenerateApiLink = "/api/sdk/generate";

export type IGenerateQueryParams = undefined;

export const useGenerateMutation = createMutationHook<void, string[]>(GenerateApiLink, "post");

export const useGenerateQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([GenerateApiLink]);
}

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
