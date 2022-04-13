/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {createMutationHook, createPromise, createPromiseHook, Form, IFormProps, toLink} from "@leight-core/client";
import {IChunkEndpointQuery} from "@leight-core/server";
import {FC} from "react";
import {useQueryClient} from "react-query";

export const UploadApiLink = "/api/file/chunk/[chunkId]/upload";

export type IUploadQueryParams = IChunkEndpointQuery;

export const useUploadMutation = createMutationHook<string, void, IChunkEndpointQuery>(UploadApiLink, "post");

export const useUploadQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([UploadApiLink]);
}

export interface IUploadDefaultFormProps extends Partial<IFormProps<string, void, IChunkEndpointQuery>> {
}

export const UploadDefaultForm: FC<IUploadDefaultFormProps> = props => <Form<string, void, IChunkEndpointQuery>
	useMutation={useUploadMutation}
	{...props}
/>

export const toUploadLink = (queryParams?: IUploadQueryParams) => toLink(UploadApiLink, queryParams);
export const useUploadLink = () => toUploadLink;

export const useUploadPromise = createPromiseHook<string, void, IChunkEndpointQuery>(UploadApiLink, "post");

export const UploadPromise = createPromise<string, void, IChunkEndpointQuery>(UploadApiLink, "post");
