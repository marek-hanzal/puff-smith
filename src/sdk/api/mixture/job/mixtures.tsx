/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IMixturesJobParams} from "@/puff-smith/jobs/mixture/interface";
import {IJob} from "@leight-core/api";
import {createMutationHook, createPromise, createPromiseHook, Form, IFormProps, toLink} from "@leight-core/client";
import {FC} from "react";
import {useQueryClient} from "react-query";

export const MixturesJobApiLink = "/api/mixture/job/mixtures";

export type IMixturesJobQueryParams = any;

export const useMixturesJobMutation = createMutationHook<IMixturesJobParams, IJob<IMixturesJobParams>>(MixturesJobApiLink, "post");

export const useMixturesJobQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([MixturesJobApiLink]);
}

export interface IMixturesJobDefaultFormProps extends Partial<IFormProps<IMixturesJobParams, IJob<IMixturesJobParams>>> {
}

export const MixturesJobDefaultForm: FC<IMixturesJobDefaultFormProps> = props => <Form<IMixturesJobParams, IJob<IMixturesJobParams>>
	useMutation={useMixturesJobMutation}
	{...props}
/>

export const toMixturesJobLink = (queryParams?: IMixturesJobQueryParams) => toLink(MixturesJobApiLink, queryParams);
export const useMixturesJobLink = () => toMixturesJobLink;

export const useMixturesJobPromise = createPromiseHook<IMixturesJobParams, IJob<IMixturesJobParams>>(MixturesJobApiLink, "post");

export const MixturesJobPromise = createPromise<IMixturesJobParams, IJob<IMixturesJobParams>>(MixturesJobApiLink, "post");
