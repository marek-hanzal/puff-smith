import {IChunkEndpointQuery} from "@leight-core/server";
import {FC} from "react";
import {createMutationHook, createPromiseHook, Form, IFormProps, useLinkContext} from "@leight-core/client";

export const UploadApiLink = "/api/leight/shared/file/chunk/[chunkId]/upload";

export type IUploadQueryParams = IChunkEndpointQuery;

export const useUploadMutation = createMutationHook<string, void, IChunkEndpointQuery>(UploadApiLink, "post");

export interface IUploadDefaultFormProps extends Partial<IFormProps<string, void, IChunkEndpointQuery>> {
}

export const UploadDefaultForm: FC<IUploadDefaultFormProps> = props => <Form<string, void, IChunkEndpointQuery>
	useMutation={useUploadMutation}
	{...props}
/>

export const useUploadLink = (): ((query: IUploadQueryParams) => string) => {
	const linkContext = useLinkContext();
	return query => linkContext.link(UploadApiLink, query);
}

export const useUploadPromise = createPromiseHook<string, void, IChunkEndpointQuery>(UploadApiLink, "post");
