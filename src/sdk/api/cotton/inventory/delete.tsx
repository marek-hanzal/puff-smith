/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {ICottonInventory, ICottonInventoryDelete} from "@/puff-smith/service/cotton/inventory/interface";
import {createMutationHook, createPromise, createPromiseHook, Form, IFormProps, toLink} from "@leight-core/client";
import {FC} from "react";
import {useQueryClient} from "react-query";

export const DeleteApiLink = "/api/cotton/inventory/delete";

export type IDeleteQueryParams = undefined;

export const useDeleteMutation = createMutationHook<ICottonInventoryDelete, ICottonInventory[]>(DeleteApiLink, "post");

export const useDeleteQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([DeleteApiLink]);
}

export interface IDeleteDefaultFormProps extends Partial<IFormProps<ICottonInventoryDelete, ICottonInventory[]>> {
}

export const DeleteDefaultForm: FC<IDeleteDefaultFormProps> = props => <Form<ICottonInventoryDelete, ICottonInventory[]>
	useMutation={useDeleteMutation}
	{...props}
/>

export const toDeleteLink = (queryParams?: IDeleteQueryParams) => toLink(DeleteApiLink, queryParams);
export const useDeleteLink = () => toDeleteLink;

export const useDeletePromise = createPromiseHook<ICottonInventoryDelete, ICottonInventory[]>(DeleteApiLink, "post");

export const DeletePromise = createPromise<ICottonInventoryDelete, ICottonInventory[]>(DeleteApiLink, "post");
