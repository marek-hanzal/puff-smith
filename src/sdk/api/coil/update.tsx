/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {createMutationHook, createPromise, createPromiseHook, Form, IFormProps, toLink} from "@leight-core/client";
import {FC} from "react";
import {useQueryClient} from "react-query";

export const CoilUpdateApiLink = "/api/coil/update";

export type ICoilUpdateQueryParams = undefined;

export const useCoilUpdateMutation = createMutationHook<any, any>(CoilUpdateApiLink, "post");

export const useCoilUpdateQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([CoilUpdateApiLink]);
}

export interface ICoilUpdateDefaultFormProps extends Partial<IFormProps<any, any>> {
}

export const CoilUpdateDefaultForm: FC<ICoilUpdateDefaultFormProps> = props => <Form<any, any>
	useMutation={useCoilUpdateMutation}
	{...props}
/>

export const toCoilUpdateLink = (queryParams?: ICoilUpdateQueryParams) => toLink(CoilUpdateApiLink, queryParams);
export const useCoilUpdateLink = () => toCoilUpdateLink;

export const useCoilUpdatePromise = createPromiseHook<any, any>(CoilUpdateApiLink, "post");

export const CoilUpdatePromise = createPromise<any, any>(CoilUpdateApiLink, "post");
