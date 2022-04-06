/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IBaseInventory, IBaseInventoryCreate} from "@/puff-smith/service/base";
import {createMutationHook, createPromiseHook, Form, IFormProps, useLinkContext} from "@leight-core/client";
import {FC} from "react";
import {useQueryClient} from "react-query";

export const CreateApiLink = "/api/base/inventory/create";

export type ICreateQueryParams = undefined;

export const useCreateMutation = createMutationHook<Omit<IBaseInventoryCreate, "userId">, IBaseInventory>(CreateApiLink, "post");

export const useCreateQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([CreateApiLink]);
}

export interface ICreateDefaultFormProps extends Partial<IFormProps<Omit<IBaseInventoryCreate, "userId">, IBaseInventory>> {
}

export const CreateDefaultForm: FC<ICreateDefaultFormProps> = props => <Form<Omit<IBaseInventoryCreate, "userId">, IBaseInventory>
	useMutation={useCreateMutation}
	{...props}
/>

export const useCreateLink = (): ((query: ICreateQueryParams) => string) => {
	const linkContext = useLinkContext();
	return query => linkContext.link(CreateApiLink, query);
}

export const useCreatePromise = createPromiseHook<Omit<IBaseInventoryCreate, "userId">, IBaseInventory>(CreateApiLink, "post");
