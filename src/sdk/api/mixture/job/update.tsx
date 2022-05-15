/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {createMutationHook, createPromise, createPromiseHook, Form, IFormProps, toLink} from "@leight-core/client";
import {FC} from "react";
import {useQueryClient} from "react-query";

export const UpdateJobApiLink = "/api/mixture/job/update";

export type IUpdateJobQueryParams = undefined;

export const useUpdateJobMutation = createMutationHook<void, any>(UpdateJobApiLink, "post");

export const useUpdateJobQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([UpdateJobApiLink]);
};

export interface IUpdateJobDefaultFormProps extends Partial<IFormProps<void, any>> {
}

export const UpdateJobDefaultForm: FC<IUpdateJobDefaultFormProps> = props => <Form<void, any>
	useMutation={useUpdateJobMutation}
	{...props}
/>;

export const toUpdateJobLink = (queryParams?: IUpdateJobQueryParams) => toLink(UpdateJobApiLink, queryParams);
export const useUpdateJobLink = () => toUpdateJobLink;

export const useUpdateJobPromise = createPromiseHook<void, any>(UpdateJobApiLink, "post");

export const UpdateJobPromise = createPromise<void, any>(UpdateJobApiLink, "post");
