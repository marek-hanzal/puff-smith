/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IAromaInventory, IAromaInventoryDelete} from "@/puff-smith/service/aroma/inventory/interface";
import {createMutationHook, createPromise, createPromiseHook, Form, IFormProps, toLink} from "@leight-core/client";
import {FC} from "react";
import {useQueryClient} from "react-query";

export const DeleteApiLink = "/api/aroma/inventory/delete";

export type IDeleteQueryParams = undefined;

export const useDeleteMutation = createMutationHook<IAromaInventoryDelete, IAromaInventory[]>(DeleteApiLink, "post");

export const useDeleteQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([DeleteApiLink]);
}

export interface IDeleteDefaultFormProps extends Partial<IFormProps<IAromaInventoryDelete, IAromaInventory[]>> {
}

export const DeleteDefaultForm: FC<IDeleteDefaultFormProps> = props => <Form<IAromaInventoryDelete, IAromaInventory[]>
	useMutation={useDeleteMutation}
	{...props}
/>

export const toDeleteLink = (queryParams?: IDeleteQueryParams) => toLink(DeleteApiLink, queryParams);
export const useDeleteLink = () => toDeleteLink;

export const useDeletePromise = createPromiseHook<IAromaInventoryDelete, IAromaInventory[]>(DeleteApiLink, "post");

export const DeletePromise = createPromise<IAromaInventoryDelete, IAromaInventory[]>(DeleteApiLink, "post");
