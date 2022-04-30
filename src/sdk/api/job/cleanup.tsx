/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IJobQuery} from "@/puff-smith/service/job/interface";
import {JobService} from "@/puff-smith/service/job/JobService";
import {IQueryFilter, IQueryParams} from "@leight-core/api";
import {MutationEndpoint} from "@leight-core/server";
import {FC} from "react";
import {useQueryClient} from "react-query";
import {Form, IFormProps, ISourceProviderProps, createMutationHook, createPromise, createPromiseHook, createQueryHook, toLink, useSourceContext} from "@leight-core/client";

export const CleanupApiLink = "/api/job/cleanup";

export type ICleanupQueryParams = undefined;

export const useCleanupMutation = createMutationHook<IQueryFilter<IJobQuery> | undefined, void>(CleanupApiLink, "post");

export const useCleanupQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([CleanupApiLink]);
}

export interface ICleanupDefaultFormProps extends Partial<IFormProps<IQueryFilter<IJobQuery> | undefined, void>> {
}

export const CleanupDefaultForm: FC<ICleanupDefaultFormProps> = props => <Form<IQueryFilter<IJobQuery> | undefined, void>
	useMutation={useCleanupMutation}
	{...props}
/>

export const toCleanupLink = (queryParams?: ICleanupQueryParams) => toLink(CleanupApiLink, queryParams);
export const useCleanupLink = () => toCleanupLink;

export const useCleanupPromise = createPromiseHook<IQueryFilter<IJobQuery> | undefined, void>(CleanupApiLink, "post");

export const CleanupPromise = createPromise<IQueryFilter<IJobQuery> | undefined, void>(CleanupApiLink, "post");
