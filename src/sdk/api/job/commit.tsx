/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {FC} from "react";
import {useQueryClient} from "react-query";
import {createMutationHook, createPromiseHook, Form, IFormProps, useLinkContext} from "@leight-core/client";

export const CommitApiLink = "/api/job/commit";

export type ICommitQueryParams = undefined;

export const useCommitMutation = createMutationHook<void, boolean>(CommitApiLink, "post");

export const useCommitQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([CommitApiLink]);
}

export interface ICommitDefaultFormProps extends Partial<IFormProps<void, boolean>> {
}

export const CommitDefaultForm: FC<ICommitDefaultFormProps> = props => <Form<void, boolean>
	useMutation={useCommitMutation}
	{...props}
/>

export const useCommitLink = (): ((query: ICommitQueryParams) => string) => {
	const linkContext = useLinkContext();
	return query => linkContext.link(CommitApiLink, query);
}

export const useCommitPromise = createPromiseHook<void, boolean>(CommitApiLink, "post");
