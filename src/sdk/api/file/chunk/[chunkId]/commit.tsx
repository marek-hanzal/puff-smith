/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IChunkEndpointQuery} from "@leight-core/server";
import {IChunkCommit, IFile} from "@leight-core/api";
import {FC} from "react";
import {useQueryClient} from "react-query";
import {createMutationHook, createPromiseHook, Form, IFormProps, useLinkContext} from "@leight-core/client";

export const CommitApiLink = "/api/file/chunk/[chunkId]/commit";

export type ICommitQueryParams = IChunkEndpointQuery;

export const useCommitMutation = createMutationHook<IChunkCommit, IFile, IChunkEndpointQuery>(CommitApiLink, "post");

export const useCommitQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([CommitApiLink]);
}

export interface ICommitDefaultFormProps extends Partial<IFormProps<IChunkCommit, IFile, IChunkEndpointQuery>> {
}

export const CommitDefaultForm: FC<ICommitDefaultFormProps> = props => <Form<IChunkCommit, IFile, IChunkEndpointQuery>
	useMutation={useCommitMutation}
	{...props}
/>

export const useCommitLink = (): ((query: ICommitQueryParams) => string) => {
	const linkContext = useLinkContext();
	return query => linkContext.link(CommitApiLink, query);
}

export const useCommitPromise = createPromiseHook<IChunkCommit, IFile, IChunkEndpointQuery>(CommitApiLink, "post");
