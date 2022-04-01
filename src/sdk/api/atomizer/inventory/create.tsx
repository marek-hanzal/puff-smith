/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IAtomizerInventory, IAtomizerInventoryCreate} from "@/puff-smith/service/atomizer";
import {FC} from "react";
import {useQueryClient} from "react-query";
import {createMutationHook, createPromiseHook, Form, IFormProps, useLinkContext} from "@leight-core/client";

export const CreateApiLink = "/api/atomizer/inventory/create";

export type ICreateQueryParams = undefined;

export const useCreateMutation = createMutationHook<Omit<IAtomizerInventoryCreate, "userId">, IAtomizerInventory>(CreateApiLink, "post");

export const useCreateQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([CreateApiLink]);
}

export interface ICreateDefaultFormProps extends Partial<IFormProps<Omit<IAtomizerInventoryCreate, "userId">, IAtomizerInventory>> {
}

export const CreateDefaultForm: FC<ICreateDefaultFormProps> = props => <Form<Omit<IAtomizerInventoryCreate, "userId">, IAtomizerInventory>
	useMutation={useCreateMutation}
	{...props}
/>

export const useCreateLink = (): ((query: ICreateQueryParams) => string) => {
	const linkContext = useLinkContext();
	return query => linkContext.link(CreateApiLink, query);
}

export const useCreatePromise = createPromiseHook<Omit<IAtomizerInventoryCreate, "userId">, IAtomizerInventory>(CreateApiLink, "post");
