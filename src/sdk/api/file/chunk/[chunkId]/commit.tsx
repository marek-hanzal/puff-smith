/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {chunkService} from "@/puff-smith/service/chunk/service";
import {IChunkCommit, IFile, IQueryParams} from "@leight-core/api";
import {CommitChunkEndpoint, Endpoint, IChunkEndpointQuery} from "@leight-core/server";
import {FC} from "react";
import {useQueryClient} from "react-query";
import {Form, IFormProps, ISourceProviderProps, createMutationHook, createPromise, createPromiseHook, createQueryHook, toLink, useSourceContext} from "@leight-core/client";

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

export const toCommitLink = (queryParams?: ICommitQueryParams) => toLink(CommitApiLink, queryParams);
export const useCommitLink = () => toCommitLink;

export const useCommitPromise = createPromiseHook<IChunkCommit, IFile, IChunkEndpointQuery>(CommitApiLink, "post");

export const CommitPromise = createPromise<IChunkCommit, IFile, IChunkEndpointQuery>(CommitApiLink, "post");
