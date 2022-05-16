/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IMixtureJobParams} from "@/puff-smith/cli/jobs/mixture/interface";
import {IJob} from "@leight-core/api";
import {createMutationHook, createPromise, createPromiseHook, Form, IFormProps, toLink} from "@leight-core/client";
import {FC} from "react";
import {useQueryClient} from "react-query";

export const MixtureJobApiLink = "/api/mixture/job/mixture";

export type IMixtureJobQueryParams = undefined;

export const useMixtureJobMutation = createMutationHook<IMixtureJobParams, IJob<IMixtureJobParams>>(MixtureJobApiLink, "post");

export const useMixtureJobQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([MixtureJobApiLink]);
}

export interface IMixtureJobDefaultFormProps extends Partial<IFormProps<IMixtureJobParams, IJob<IMixtureJobParams>>> {
}

export const MixtureJobDefaultForm: FC<IMixtureJobDefaultFormProps> = props => <Form<IMixtureJobParams, IJob<IMixtureJobParams>>
	useMutation={useMixtureJobMutation}
	{...props}
/>

export const toMixtureJobLink = (queryParams?: IMixtureJobQueryParams) => toLink(MixtureJobApiLink, queryParams);
export const useMixtureJobLink = () => toMixtureJobLink;

export const useMixtureJobPromise = createPromiseHook<IMixtureJobParams, IJob<IMixtureJobParams>>(MixtureJobApiLink, "post");

export const MixtureJobPromise = createPromise<IMixtureJobParams, IJob<IMixtureJobParams>>(MixtureJobApiLink, "post");
