/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IAromaInventory, IAromaInventoryCreate} from "@/puff-smith/service/aroma/inventory/interface";
import {createMutationHook, createPromise, createPromiseHook, Form, IFormProps, toLink} from "@leight-core/client";
import {FC} from "react";
import {useQueryClient} from "react-query";

export const CreateApiLink = "/api/aroma/inventory/create";

export type ICreateQueryParams = undefined;

export const useCreateMutation = createMutationHook<IAromaInventoryCreate, IAromaInventory>(CreateApiLink, "post");

export const useCreateQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([CreateApiLink]);
}

export interface ICreateDefaultFormProps extends Partial<IFormProps<IAromaInventoryCreate, IAromaInventory>> {
}

export const CreateDefaultForm: FC<ICreateDefaultFormProps> = props => <Form<IAromaInventoryCreate, IAromaInventory>
	useMutation={useCreateMutation}
	{...props}
/>

export const toCreateLink = (queryParams?: ICreateQueryParams) => toLink(CreateApiLink, queryParams);
export const useCreateLink = () => toCreateLink;

export const useCreatePromise = createPromiseHook<IAromaInventoryCreate, IAromaInventory>(CreateApiLink, "post");

export const CreatePromise = createPromise<IAromaInventoryCreate, IAromaInventory>(CreateApiLink, "post");
