/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IMixtureInfo, IToMixtureInfoRequest} from "@/puff-smith/service/mixture/utils";
import {createMutationHook, createPromise, createPromiseHook, Form, IFormProps, toLink} from "@leight-core/client";
import {FC} from "react";

export const MixtureInfoApiLink = "/api/mixture/info";

export type IMixtureInfoQueryParams = any;

export const useMixtureInfoMutation = createMutationHook<IToMixtureInfoRequest, IMixtureInfo>(MixtureInfoApiLink, "post");

export interface IMixtureInfoDefaultFormProps extends Partial<IFormProps<IToMixtureInfoRequest, IMixtureInfo>> {
}

export const MixtureInfoDefaultForm: FC<IMixtureInfoDefaultFormProps> = props => <Form<IToMixtureInfoRequest, IMixtureInfo>
	useMutation={useMixtureInfoMutation}
	{...props}
/>

export const toMixtureInfoLink = (queryParams?: IMixtureInfoQueryParams) => toLink(MixtureInfoApiLink, queryParams);
export const useMixtureInfoLink = () => toMixtureInfoLink;

export const useMixtureInfoPromise = createPromiseHook<IToMixtureInfoRequest, IMixtureInfo>(MixtureInfoApiLink, "post");

export const MixtureInfoPromise = createPromise<IToMixtureInfoRequest, IMixtureInfo>(MixtureInfoApiLink, "post");
