import {FC} from "react";
import {Form, IFormProps} from "@leight-core/form";
import {createPostMutation, usePostPromise} from "@leight-core/source";
import {useLinkContext} from "@leight-core/link";
import {AxiosRequestConfig} from "axios";

export const GenerateApiLink = "/api/root/sdk/generate";

export type IGenerateQueryParams = void;

export const useGenerateMutation = createPostMutation<IGenerateQueryParams, void, string[]>(GenerateApiLink);

export interface IGenerateDefaultFormProps extends Partial<IFormProps<IGenerateQueryParams, void, string[]>> {
}

export const GenerateDefaultForm: FC<IGenerateDefaultFormProps> = props => <Form<IGenerateQueryParams, void, string[]>
	useMutation={useGenerateMutation}
	{...props}
/>

export const useGenerateLink = (): ((query: IGenerateQueryParams) => string) => {
	const linkContext = useLinkContext();
	return query => linkContext.link(GenerateApiLink, query);
}

export const useGeneratePromise = (request: void, query: IGenerateQueryParams, config?: AxiosRequestConfig) => {
	return usePostPromise<IGenerateQueryParams, void, string[]>(GenerateApiLink, query, request, config);
}
