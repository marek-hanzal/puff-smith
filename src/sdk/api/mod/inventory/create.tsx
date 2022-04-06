/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IModInventory, IModInventoryCreate} from "@/puff-smith/service/mod";
import {createMutationHook, createPromiseHook, Form, IFormProps, useLinkContext} from "@leight-core/client";
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
/>

export const useCreateLink = (): ((query: ICreateQueryParams) => string) => {
	const linkContext = useLinkContext();
	return query => linkContext.link(CreateApiLink, query);
}

export const useCreatePromise = createPromiseHook<Omit<IModInventoryCreate, "userId">, IModInventory>(CreateApiLink, "post");
