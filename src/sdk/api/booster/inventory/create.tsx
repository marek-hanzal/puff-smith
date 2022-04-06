/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IBoosterInventory, IBoosterInventoryCreate} from "@/puff-smith/service/booster";
import {createMutationHook, createPromiseHook, Form, IFormProps, useLinkContext} from "@leight-core/client";
import {FC} from "react";
import {useQueryClient} from "react-query";

export const CreateApiLink = "/api/booster/inventory/create";

export type ICreateQueryParams = undefined;

export const useCreateMutation = createMutationHook<Omit<IBoosterInventoryCreate, "userId">, IBoosterInventory>(CreateApiLink, "post");

export const useCreateQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([CreateApiLink]);
}

export interface ICreateDefaultFormProps extends Partial<IFormProps<Omit<IBoosterInventoryCreate, "userId">, IBoosterInventory>> {
}

export const CreateDefaultForm: FC<ICreateDefaultFormProps> = props => <Form<Omit<IBoosterInventoryCreate, "userId">, IBoosterInventory>
	useMutation={useCreateMutation}
	{...props}
/>

export const useCreateLink = (): ((query: ICreateQueryParams) => string) => {
	const linkContext = useLinkContext();
	return query => linkContext.link(CreateApiLink, query);
}

export const useCreatePromise = createPromiseHook<Omit<IBoosterInventoryCreate, "userId">, IBoosterInventory>(CreateApiLink, "post");
