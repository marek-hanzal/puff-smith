import {FC} from "react";
import {useQueryClient} from "react-query";
import {createMutationHook, createPromiseHook, Form, IFormProps, useLinkContext} from "@leight-core/client";

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

export const useGenerateLink = (): ((query: IGenerateQueryParams) => string) => {
	const linkContext = useLinkContext();
	return query => linkContext.link(GenerateApiLink, query);
}

export const useGeneratePromise = createPromiseHook<void, string[]>(GenerateApiLink, "post");
