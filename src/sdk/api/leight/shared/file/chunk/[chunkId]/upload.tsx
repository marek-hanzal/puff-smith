import {FC} from "react";
import {Form, IFormProps} from "@leight-core/form";
import {createMutationHook, createPromiseHook} from "@leight-core/source";
import {useLinkContext} from "@leight-core/link";

export const UploadApiLink = "/api/leight/shared/file/chunk/[chunkId]/upload";

export type IUploadQueryParams = { chunkId: string };

export const useUploadMutation = createMutationHook<string, void, IUploadQueryParams>(UploadApiLink, "post");

export interface IUploadDefaultFormProps extends Partial<IFormProps<string, void, IUploadQueryParams>> {
}

export const UploadDefaultForm: FC<IUploadDefaultFormProps> = props => <Form<string, void, IUploadQueryParams>
	useMutation={useUploadMutation}
	{...props}
/>

export const useUploadLink = (): ((query: IUploadQueryParams) => string) => {
	const linkContext = useLinkContext();
	return query => linkContext.link(UploadApiLink, query);
}

export const useUploadPromise = createPromiseHook<string, void, IUploadQueryParams>(UploadApiLink, "post");
