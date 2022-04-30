/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {MixtureJobName} from "@/puff-smith/agenda/job/mixture";
import {JobService} from "@/puff-smith/service/job/JobService";
import {MutationEndpoint} from "@leight-core/server";
import {FC} from "react";
import {IQueryParams} from "@leight-core/api";
import {useQueryClient} from "react-query";
import {Form, IFormProps, ISourceProviderProps, createMutationHook, createPromise, createPromiseHook, createQueryHook, toLink, useSourceContext} from "@leight-core/client";

export const MixtureUpdateApiLink = "/api/mixture/update";

export type IMixtureUpdateQueryParams = undefined;

export const useMixtureUpdateMutation = createMutationHook<{ aromaId: string | null }, any>(MixtureUpdateApiLink, "post");

export const useMixtureUpdateQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([MixtureUpdateApiLink]);
}

export interface IMixtureUpdateDefaultFormProps extends Partial<IFormProps<{ aromaId: string | null }, any>> {
}

export const MixtureUpdateDefaultForm: FC<IMixtureUpdateDefaultFormProps> = props => <Form<{ aromaId: string | null }, any>
	useMutation={useMixtureUpdateMutation}
	{...props}
/>

export const toMixtureUpdateLink = (queryParams?: IMixtureUpdateQueryParams) => toLink(MixtureUpdateApiLink, queryParams);
export const useMixtureUpdateLink = () => toMixtureUpdateLink;

export const useMixtureUpdatePromise = createPromiseHook<{ aromaId: string | null }, any>(MixtureUpdateApiLink, "post");

export const MixtureUpdatePromise = createPromise<{ aromaId: string | null }, any>(MixtureUpdateApiLink, "post");
