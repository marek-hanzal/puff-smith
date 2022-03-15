import {FC} from "react";
import {useQueryClient} from "react-query";
import {createMutationHook, createPromiseHook, Form, IFormProps, useLinkContext} from "@leight-core/client";

export const CommitApiLink = "/api/leight/shared/job/commit";

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

export const useCommitLink = (): ((query: ICommitQueryParams) => string) => {
	const linkContext = useLinkContext();
	return query => linkContext.link(CommitApiLink, query);
}

export const useCommitPromise = createPromiseHook<void, void>(CommitApiLink, "post");
