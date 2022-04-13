/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IModInventory, IModInventoryCreate} from "@/puff-smith/service/mod";
import {createMutationHook, createPromise, createPromiseHook, Form, IFormProps, toLink} from "@leight-core/client";
import {FC} from "react";
import {useQueryClient} from "react-query";

export const CreateApiLink = "/api/mod/inventory/create";

export type ICreateQueryParams = undefined;

export const useCreateMutation = createMutationHook<Omit<IModInventoryCreate, "userId">, IModInventory>(CreateApiLink, "post");

export const useCreateQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([CreateApiLink]);
}

export interface ICreateDefaultFormProps extends Partial<IFormProps<Omit<IModInventoryCreate, "userId">, IModInventory>> {
}

export const CreateDefaultForm: FC<ICreateDefaultFormProps> = props => <Form<Omit<IModInventoryCreate, "userId">, IModInventory>
	useMutation={useCreateMutation}
	{...props}
/>;

export const toCreateLink = (queryParams?: ICreateQueryParams) => toLink(CreateApiLink, queryParams);
export const useCreateLink = () => toCreateLink;

export const useCreatePromise = createPromiseHook<Omit<IModInventoryCreate, "userId">, IModInventory>(CreateApiLink, "post");

export const CreatePromise = createPromise<Omit<IModInventoryCreate, "userId">, IModInventory>(CreateApiLink, "post");
