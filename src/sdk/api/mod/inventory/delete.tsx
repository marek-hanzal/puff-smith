/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IModInventory, IModInventoryDelete} from "@/puff-smith/service/mod/inventory/interface";
import {createMutationHook, createPromise, createPromiseHook, Form, IFormProps, toLink} from "@leight-core/client";
import {FC} from "react";
import {useQueryClient} from "react-query";

export const DeleteApiLink = "/api/mod/inventory/delete";

export type IDeleteQueryParams = undefined;

export const useDeleteMutation = createMutationHook<IModInventoryDelete, IModInventory[]>(DeleteApiLink, "post");

export const useDeleteQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([DeleteApiLink]);
}

export interface IDeleteDefaultFormProps extends Partial<IFormProps<IModInventoryDelete, IModInventory[]>> {
}

export const DeleteDefaultForm: FC<IDeleteDefaultFormProps> = props => <Form<IModInventoryDelete, IModInventory[]>
	useMutation={useDeleteMutation}
	{...props}
/>

export const toDeleteLink = (queryParams?: IDeleteQueryParams) => toLink(DeleteApiLink, queryParams);
export const useDeleteLink = () => toDeleteLink;

export const useDeletePromise = createPromiseHook<IModInventoryDelete, IModInventory[]>(DeleteApiLink, "post");

export const DeletePromise = createPromise<IModInventoryDelete, IModInventory[]>(DeleteApiLink, "post");
