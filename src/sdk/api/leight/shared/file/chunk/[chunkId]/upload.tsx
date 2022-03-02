import {FC} from "react";
import {Form, IFormProps} from "@leight-core/form";
import {createPostMutation, usePostPromise} from "@leight-core/source";
import {useLinkContext} from "@leight-core/link";
import {AxiosRequestConfig} from "axios";

export const UploadApiLink = "/api/leight/shared/file/chunk/[chunkId]/upload";

export type IUploadQueryParams = { chunkId: string };

export const useUploadMutation = createPostMutation<IUploadQueryParams, string, void>(UploadApiLink);

export interface IUploadDefaultFormProps extends Partial<IFormProps<IUploadQueryParams, string, void>> {
}

export const UploadDefaultForm: FC<IUploadDefaultFormProps> = props => <Form<IUploadQueryParams, string, void>
	useMutation={useUploadMutation}
	{...props}
/>

export const useUploadLink = (): ((query: IUploadQueryParams) => string) => {
	const linkContext = useLinkContext();
	return query => linkContext.link(UploadApiLink, query);
}

export const useUploadPromise = (request: string, query: IUploadQueryParams, config?: AxiosRequestConfig) => {
	return usePostPromise<IUploadQueryParams, string, void>(UploadApiLink, query, request, config);
}
