/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IBaseInventory, IBaseInventoryDelete} from "@/puff-smith/service/base/inventory/interface";
import {createMutationHook, createPromise, createPromiseHook, Form, IFormProps, toLink} from "@leight-core/client";
import {FC} from "react";
import {useQueryClient} from "react-query";

export const DeleteApiLink = "/api/base/inventory/delete";

export type IDeleteQueryParams = undefined;

export const useDeleteMutation = createMutationHook<IBaseInventoryDelete, IBaseInventory[]>(DeleteApiLink, "post");

export const useDeleteQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([DeleteApiLink]);
};

export interface IDeleteDefaultFormProps extends Partial<IFormProps<IBaseInventoryDelete, IBaseInventory[]>> {
}

export const DeleteDefaultForm: FC<IDeleteDefaultFormProps> = props => <Form<IBaseInventoryDelete, IBaseInventory[]>
	useMutation={useDeleteMutation}
	{...props}
/>;

export const toDeleteLink = (queryParams?: IDeleteQueryParams) => toLink(DeleteApiLink, queryParams);
export const useDeleteLink = () => toDeleteLink;

export const useDeletePromise = createPromiseHook<IBaseInventoryDelete, IBaseInventory[]>(DeleteApiLink, "post");

export const DeletePromise = createPromise<IBaseInventoryDelete, IBaseInventory[]>(DeleteApiLink, "post");
