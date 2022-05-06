/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {ILiquid, ILiquidDelete} from "@/puff-smith/service/liquid/interface";
import {createMutationHook, createPromise, createPromiseHook, Form, IFormProps, toLink} from "@leight-core/client";
import {FC} from "react";
import {useQueryClient} from "react-query";

export const DeleteApiLink = "/api/liquid/delete";

export type IDeleteQueryParams = undefined;

export const useDeleteMutation = createMutationHook<ILiquidDelete, ILiquid[]>(DeleteApiLink, "post");

export const useDeleteQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([DeleteApiLink]);
}

export interface IDeleteDefaultFormProps extends Partial<IFormProps<ILiquidDelete, ILiquid[]>> {
}

export const DeleteDefaultForm: FC<IDeleteDefaultFormProps> = props => <Form<ILiquidDelete, ILiquid[]>
	useMutation={useDeleteMutation}
	{...props}
/>

export const toDeleteLink = (queryParams?: IDeleteQueryParams) => toLink(DeleteApiLink, queryParams);
export const useDeleteLink = () => toDeleteLink;

export const useDeletePromise = createPromiseHook<ILiquidDelete, ILiquid[]>(DeleteApiLink, "post");

export const DeletePromise = createPromise<ILiquidDelete, ILiquid[]>(DeleteApiLink, "post");
