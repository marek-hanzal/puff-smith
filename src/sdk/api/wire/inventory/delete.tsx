/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IWireInventory, IWireInventoryDelete} from "@/puff-smith/service/wire/inventory/interface";
import {createMutationHook, createPromise, createPromiseHook, Form, IFormProps, toLink} from "@leight-core/client";
import {FC} from "react";
import {useQueryClient} from "react-query";

export const DeleteApiLink = "/api/wire/inventory/delete";

export type IDeleteQueryParams = undefined;

export const useDeleteMutation = createMutationHook<IWireInventoryDelete, IWireInventory[]>(DeleteApiLink, "post");

export const useDeleteQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([DeleteApiLink]);
};

export interface IDeleteDefaultFormProps extends Partial<IFormProps<IWireInventoryDelete, IWireInventory[]>> {
}

export const DeleteDefaultForm: FC<IDeleteDefaultFormProps> = props => <Form<IWireInventoryDelete, IWireInventory[]>
	useMutation={useDeleteMutation}
	{...props}
/>;

export const toDeleteLink = (queryParams?: IDeleteQueryParams) => toLink(DeleteApiLink, queryParams);
export const useDeleteLink = () => toDeleteLink;

export const useDeletePromise = createPromiseHook<IWireInventoryDelete, IWireInventory[]>(DeleteApiLink, "post");

export const DeletePromise = createPromise<IWireInventoryDelete, IWireInventory[]>(DeleteApiLink, "post");
