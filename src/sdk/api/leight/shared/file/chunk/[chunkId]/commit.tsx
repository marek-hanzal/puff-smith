import {FC} from "react";
import {createMutationHook, createPromiseHook, Form, IFormProps, useLinkContext} from "@leight-core/client";
import {IChunkCommit} from "@/puff-smith/component/temp";
import {IFile} from "@leight-core/api";

export const CommitApiLink = "/api/leight/shared/file/chunk/[chunkId]/commit";

export type ICommitQueryParams = { chunkId: string };

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
