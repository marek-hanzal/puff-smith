/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IMixtureJobParams} from "@/puff-smith/cli/jobs/mixture";
import {createMutationHook, createPromise, createPromiseHook, Form, IFormProps, toLink} from "@leight-core/client";
import {FC} from "react";
import {useQueryClient} from "react-query";

export const MixtureUpdateApiLink = "/api/mixture/aroma/update";

export type IMixtureUpdateQueryParams = undefined;

export const useMixtureUpdateMutation = createMutationHook<IMixtureJobParams, any>(MixtureUpdateApiLink, "post");

export const useMixtureUpdateQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([MixtureUpdateApiLink]);
}

export interface IMixtureUpdateDefaultFormProps extends Partial<IFormProps<IMixtureJobParams, any>> {
}

export const MixtureUpdateDefaultForm: FC<IMixtureUpdateDefaultFormProps> = props => <Form<IMixtureJobParams, any>
	useMutation={useMixtureUpdateMutation}
	{...props}
/>

export const toMixtureUpdateLink = (queryParams?: IMixtureUpdateQueryParams) => toLink(MixtureUpdateApiLink, queryParams);
export const useMixtureUpdateLink = () => toMixtureUpdateLink;

export const useMixtureUpdatePromise = createPromiseHook<IMixtureJobParams, any>(MixtureUpdateApiLink, "post");

export const MixtureUpdatePromise = createPromise<IMixtureJobParams, any>(MixtureUpdateApiLink, "post");