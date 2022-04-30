/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {JobService} from "@/puff-smith/service/job/JobService";
import {MutationEndpoint} from "@leight-core/server";
import {FC} from "react";
import {IQueryParams} from "@leight-core/api";
import {useQueryClient} from "react-query";
import {Form, IFormProps, ISourceProviderProps, createMutationHook, createPromise, createPromiseHook, createQueryHook, toLink, useSourceContext} from "@leight-core/client";

export const CommitApiLink = "/api/job/commit";

export type ICommitQueryParams = undefined;

export const useCommitMutation = createMutationHook<void, void>(CommitApiLink, "post");

export const useCommitQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([CommitApiLink]);
}

export interface ICommitDefaultFormProps extends Partial<IFormProps<void, void>> {
}

export const CommitDefaultForm: FC<ICommitDefaultFormProps> = props => <Form<void, void>
	useMutation={useCommitMutation}
	{...props}
/>

export const toCommitLink = (queryParams?: ICommitQueryParams) => toLink(CommitApiLink, queryParams);
export const useCommitLink = () => toCommitLink;

export const useCommitPromise = createPromiseHook<void, void>(CommitApiLink, "post");

export const CommitPromise = createPromise<void, void>(CommitApiLink, "post");
