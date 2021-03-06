/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IMixtureUserJobParams} from "@/puff-smith/jobs/mixture/interface";
import {IJob} from "@leight-core/api";
import {createMutationHook, createPromise, createPromiseHook, Form, IFormProps, toLink} from "@leight-core/client";
import {FC} from "react";

export const MixtureUserJobApiLink = "/api/mixture/job/mixture-user";

export type IMixtureUserJobQueryParams = any;

export const useMixtureUserJobMutation = createMutationHook<IMixtureUserJobParams, IJob<IMixtureUserJobParams>>(MixtureUserJobApiLink, "post");

export interface IMixtureUserJobDefaultFormProps extends Partial<IFormProps<IMixtureUserJobParams, IJob<IMixtureUserJobParams>>> {
}

export const MixtureUserJobDefaultForm: FC<IMixtureUserJobDefaultFormProps> = props => <Form<IMixtureUserJobParams, IJob<IMixtureUserJobParams>>
	useMutation={useMixtureUserJobMutation}
	{...props}
/>

export const toMixtureUserJobLink = (queryParams?: IMixtureUserJobQueryParams) => toLink(MixtureUserJobApiLink, queryParams);
export const useMixtureUserJobLink = () => toMixtureUserJobLink;

export const useMixtureUserJobPromise = createPromiseHook<IMixtureUserJobParams, IJob<IMixtureUserJobParams>>(MixtureUserJobApiLink, "post");

export const MixtureUserJobPromise = createPromise<IMixtureUserJobParams, IJob<IMixtureUserJobParams>>(MixtureUserJobApiLink, "post");
