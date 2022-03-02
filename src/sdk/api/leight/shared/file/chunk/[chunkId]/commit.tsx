import {FC} from "react";
import {Form, IFormProps} from "@leight-core/form";
import {createMutationHook, createPromiseHook} from "@leight-core/source";
import {useLinkContext} from "@leight-core/link";
import {IFile} from "@leight-core/api";

export interface ICommitRequest {
	path: string;
	name: string,
	replace: boolean;
}

export const CommitApiLink = "/api/leight/shared/file/chunk/[chunkId]/commit";

export type ICommitQueryParams = { chunkId: string };

export const useCommitMutation = createMutationHook<ICommitRequest, IFile, ICommitQueryParams>(CommitApiLink, "post");

export interface ICommitDefaultFormProps extends Partial<IFormProps<ICommitRequest, IFile, ICommitQueryParams>> {
}

export const CommitDefaultForm: FC<ICommitDefaultFormProps> = props => <Form<ICommitRequest, IFile, ICommitQueryParams>
	useMutation={useCommitMutation}
	{...props}
/>

export const useCommitLink = (): ((query: ICommitQueryParams) => string) => {
	const linkContext = useLinkContext();
	return query => linkContext.link(CommitApiLink, query);
}

export const useCommitPromise = createPromiseHook<ICommitRequest, IFile, ICommitQueryParams>(CommitApiLink, "post");
