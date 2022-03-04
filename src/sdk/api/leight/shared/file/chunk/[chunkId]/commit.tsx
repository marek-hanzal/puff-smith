import {IChunkEndpointQuery} from "@leight-core/server";
import {IChunkCommit, IFile} from "@leight-core/api";
import {FC} from "react";
import {createMutationHook, createPromiseHook, Form, IFormProps, useLinkContext} from "@leight-core/client";

export const CommitApiLink = "/api/leight/shared/file/chunk/[chunkId]/commit";

export type ICommitQueryParams = IChunkEndpointQuery;

export const useCommitMutation = createMutationHook<IChunkCommit, IFile, ICommitQueryParams>(CommitApiLink, "post");

export interface ICommitDefaultFormProps extends Partial<IFormProps<IChunkCommit, IFile, ICommitQueryParams>> {
}

export const CommitDefaultForm: FC<ICommitDefaultFormProps> = props => <Form<IChunkCommit, IFile, ICommitQueryParams>
	useMutation={useCommitMutation}
	{...props}
/>

export const useCommitLink = (): ((query: ICommitQueryParams) => string) => {
	const linkContext = useLinkContext();
	return query => linkContext.link(CommitApiLink, query);
}

export const useCommitPromise = createPromiseHook<IChunkCommit, IFile, ICommitQueryParams>(CommitApiLink, "post");
