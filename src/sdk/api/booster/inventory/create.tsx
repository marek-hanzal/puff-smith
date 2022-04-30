/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IBoosterInventory, IBoosterInventoryCreate} from "@/puff-smith/service/booster/inventory/interface";
import {createMutationHook, createPromise, createPromiseHook, Form, IFormProps, toLink} from "@leight-core/client";
import {FC} from "react";
import {useQueryClient} from "react-query";

export const CreateApiLink = "/api/booster/inventory/create";

export type ICreateQueryParams = undefined;

export const useCreateMutation = createMutationHook<IBoosterInventoryCreate, IBoosterInventory>(CreateApiLink, "post");

export const useCreateQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([CreateApiLink]);
}

export interface ICreateDefaultFormProps extends Partial<IFormProps<IBoosterInventoryCreate, IBoosterInventory>> {
}

export const CreateDefaultForm: FC<ICreateDefaultFormProps> = props => <Form<IBoosterInventoryCreate, IBoosterInventory>
	useMutation={useCreateMutation}
	{...props}
/>

export const toCreateLink = (queryParams?: ICreateQueryParams) => toLink(CreateApiLink, queryParams);
export const useCreateLink = () => toCreateLink;

export const useCreatePromise = createPromiseHook<IBoosterInventoryCreate, IBoosterInventory>(CreateApiLink, "post");

export const CreatePromise = createPromise<IBoosterInventoryCreate, IBoosterInventory>(CreateApiLink, "post");
