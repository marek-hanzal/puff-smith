import {FC} from "react";
import {Form, IFormProps} from "@leight-core/form";
import {createMutationHook, createPromiseHook} from "@leight-core/source";
import {useLinkContext} from "@leight-core/link";

export const GenerateApiLink = "/api/root/sdk/generate";

export type IGenerateQueryParams = void;

export const useGenerateMutation = createMutationHook<void, string[], IGenerateQueryParams>(GenerateApiLink, "post");

export interface IGenerateDefaultFormProps extends Partial<IFormProps<void, string[], IGenerateQueryParams>> {
}

export const GenerateDefaultForm: FC<IGenerateDefaultFormProps> = props => <Form<void, string[], IGenerateQueryParams>
	useMutation={useGenerateMutation}
	{...props}
/>

export const useGenerateLink = (): ((query: IGenerateQueryParams) => string) => {
	const linkContext = useLinkContext();
	return query => linkContext.link(GenerateApiLink, query);
}

export const useGeneratePromise = createPromiseHook<void, string[], IGenerateQueryParams>(GenerateApiLink, "post");
