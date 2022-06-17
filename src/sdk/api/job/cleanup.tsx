/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IJobQuery} from "@/puff-smith/service/job/interface";
import {IQueryFilter} from "@leight-core/api";
import {createMutationHook, createPromise, createPromiseHook, Form, IFormProps, toLink} from "@leight-core/client";
import {FC} from "react";
import {useQueryClient} from "react-query";

export const CleanupApiLink = "/api/job/cleanup";

export type ICleanupQueryParams = any;

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
