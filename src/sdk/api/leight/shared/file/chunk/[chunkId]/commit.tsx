import {FC} from "react";
import {Form, IFormProps} from "@leight-core/form";
import {createPostMutation, usePostPromise} from "@leight-core/source";
import {useLinkContext} from "@leight-core/link";
import {AxiosRequestConfig} from "axios";
import {IFile} from "@leight-core/api";

export interface ICommitRequest {
	path: string;
	name: string,
	replace: boolean;
}

export const CommitApiLink = "/api/leight/shared/file/chunk/[chunkId]/commit";

export type ICommitQueryParams = { chunkId: string };

export const useCommitMutation = createPostMutation<ICommitQueryParams, ICommitRequest, IFile>(CommitApiLink);

export interface ICommitDefaultFormProps extends Partial<IFormProps<ICommitQueryParams, ICommitRequest, IFile>> {
}

export const CommitDefaultForm: FC<ICommitDefaultFormProps> = props => <Form<ICommitQueryParams, ICommitRequest, IFile>
	useMutation={useCommitMutation}
	{...props}
/>

export const useCommitLink = (): ((query: ICommitQueryParams) => string) => {
	const linkContext = useLinkContext();
	return query => linkContext.link(CommitApiLink, query);
}

export const useCommitPromise = (request: ICommitRequest, query: ICommitQueryParams, config?: AxiosRequestConfig) => {
	return usePostPromise<ICommitQueryParams, ICommitRequest, IFile>(CommitApiLink, query, request, config);
}
