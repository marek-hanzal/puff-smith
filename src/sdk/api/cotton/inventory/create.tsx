/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {ICottonInventory, ICottonInventoryCreate} from "@/puff-smith/service/cotton";
import {createMutationHook, createPromiseHook, Form, IFormProps, useLinkContext} from "@leight-core/client";
import {FC} from "react";
import {useQueryClient} from "react-query";

export const CreateApiLink = "/api/cotton/inventory/create";

export type ICreateQueryParams = undefined;

export const useCreateMutation = createMutationHook<Omit<ICottonInventoryCreate, "userId">, ICottonInventory>(CreateApiLink, "post");

export const useCreateQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([CreateApiLink]);
}

export interface ICreateDefaultFormProps extends Partial<IFormProps<Omit<ICottonInventoryCreate, "userId">, ICottonInventory>> {
}

export const CreateDefaultForm: FC<ICreateDefaultFormProps> = props => <Form<Omit<ICottonInventoryCreate, "userId">, ICottonInventory>
	useMutation={useCreateMutation}
	{...props}
/>

export const useCreateLink = (): ((query: ICreateQueryParams) => string) => {
	const linkContext = useLinkContext();
	return query => linkContext.link(CreateApiLink, query);
}

export const useCreatePromise = createPromiseHook<Omit<ICottonInventoryCreate, "userId">, ICottonInventory>(CreateApiLink, "post");
