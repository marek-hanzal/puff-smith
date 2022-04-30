/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {ICellInventory, ICellInventoryCreate} from "@/puff-smith/service/cell/inventory/interface";
import {createMutationHook, createPromise, createPromiseHook, Form, IFormProps, toLink} from "@leight-core/client";
import {FC} from "react";
import {useQueryClient} from "react-query";

export const CreateApiLink = "/api/cell/inventory/create";

export type ICreateQueryParams = undefined;

export const useCreateMutation = createMutationHook<ICellInventoryCreate, ICellInventory>(CreateApiLink, "post");

export const useCreateQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([CreateApiLink]);
}

export interface ICreateDefaultFormProps extends Partial<IFormProps<ICellInventoryCreate, ICellInventory>> {
}

export const CreateDefaultForm: FC<ICreateDefaultFormProps> = props => <Form<ICellInventoryCreate, ICellInventory>
	useMutation={useCreateMutation}
	{...props}
/>

export const toCreateLink = (queryParams?: ICreateQueryParams) => toLink(CreateApiLink, queryParams);
export const useCreateLink = () => toCreateLink;

export const useCreatePromise = createPromiseHook<ICellInventoryCreate, ICellInventory>(CreateApiLink, "post");

export const CreatePromise = createPromise<ICellInventoryCreate, ICellInventory>(CreateApiLink, "post");
