/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {ICellInventory, ICellInventoryDelete} from "@/puff-smith/service/cell/inventory/interface";
import {createMutationHook, createPromise, createPromiseHook, Form, IFormProps, toLink} from "@leight-core/client";
import {FC} from "react";
import {useQueryClient} from "react-query";

export const DeleteApiLink = "/api/cell/inventory/delete";

export type IDeleteQueryParams = undefined;

export const useDeleteMutation = createMutationHook<ICellInventoryDelete, ICellInventory[]>(DeleteApiLink, "post");

export const useDeleteQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([DeleteApiLink]);
}

export interface IDeleteDefaultFormProps extends Partial<IFormProps<ICellInventoryDelete, ICellInventory[]>> {
}

export const DeleteDefaultForm: FC<IDeleteDefaultFormProps> = props => <Form<ICellInventoryDelete, ICellInventory[]>
	useMutation={useDeleteMutation}
	{...props}
/>

export const toDeleteLink = (queryParams?: IDeleteQueryParams) => toLink(DeleteApiLink, queryParams);
export const useDeleteLink = () => toDeleteLink;

export const useDeletePromise = createPromiseHook<ICellInventoryDelete, ICellInventory[]>(DeleteApiLink, "post");

export const DeletePromise = createPromise<ICellInventoryDelete, ICellInventory[]>(DeleteApiLink, "post");
