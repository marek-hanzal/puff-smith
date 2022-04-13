/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IJobFilter} from "@/puff-smith/service/job";
import {createMutationHook, createPromise, createPromiseHook, Form, IFormProps, toLink} from "@leight-core/client";
import {FC} from "react";
import {useQueryClient} from "react-query";

export const CleanupApiLink = "/api/job/cleanup";

export type ICleanupQueryParams = undefined;

export const useCleanupMutation = createMutationHook<IJobFilter | undefined, boolean>(CleanupApiLink, "post");

export const useCleanupQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([CleanupApiLink]);
}

export interface ICleanupDefaultFormProps extends Partial<IFormProps<IJobFilter | undefined, boolean>> {
}

export const CleanupDefaultForm: FC<ICleanupDefaultFormProps> = props => <Form<IJobFilter | undefined, boolean>
	useMutation={useCleanupMutation}
	{...props}
/>

export const toCleanupLink = (queryParams?: ICleanupQueryParams) => toLink(CleanupApiLink, queryParams);
export const useCleanupLink = () => toCleanupLink;

export const useCleanupPromise = createPromiseHook<IJobFilter | undefined, boolean>(CleanupApiLink, "post");

export const CleanupPromise = createPromise<IJobFilter | undefined, boolean>(CleanupApiLink, "post");
