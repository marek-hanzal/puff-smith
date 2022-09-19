/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {createMutationHook, createPromise, createPromiseHook, Form, IFormProps, IMobileFormProps, MobileForm, toLink} from "@leight-core/client";
import {IChunkEndpointQuery} from "@leight-core/server";
import {FC} from "react";

export const UploadApiLink = "/api/file/chunk/[chunkId]/upload";

export type IUploadQueryParams = IChunkEndpointQuery;

export const useUploadMutation = createMutationHook<string, void, IChunkEndpointQuery>(UploadApiLink, "post");

export interface IUploadDefaultFormProps extends Partial<IFormProps<string, void, IChunkEndpointQuery>> {
}

export const UploadDefaultForm: FC<IUploadDefaultFormProps> = props => <Form<string, void, IChunkEndpointQuery>
	useMutation={useUploadMutation}
	translation={UploadApiLink}
	{...props}
/>;

export interface IUploadDefaultMobileFormProps extends Partial<IMobileFormProps<string, void, IChunkEndpointQuery>> {
}

export const UploadDefaultMobileForm: FC<IUploadDefaultMobileFormProps> = props => <MobileForm<string, void, IChunkEndpointQuery>
	useMutation={useUploadMutation}
	translation={UploadApiLink}
	{...props}
/>;

export const toUploadLink = (queryParams?: IUploadQueryParams) => toLink(UploadApiLink, queryParams);
export const useUploadLink = () => toUploadLink;

export const useUploadPromise = createPromiseHook<string, void, IChunkEndpointQuery>(UploadApiLink, "post");
export const createUploadPromise = createPromise<string, void, IChunkEndpointQuery>(UploadApiLink, "post");
