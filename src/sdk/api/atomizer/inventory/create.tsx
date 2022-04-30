/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IAtomizerInventory, IAtomizerInventoryCreate} from "@/puff-smith/service/atomizer/inventory/interface";
import {createMutationHook, createPromise, createPromiseHook, Form, IFormProps, toLink} from "@leight-core/client";
import {FC} from "react";
import {useQueryClient} from "react-query";

export const CreateApiLink = "/api/atomizer/inventory/create";

export type ICreateQueryParams = undefined;

export const useCreateMutation = createMutationHook<IAtomizerInventoryCreate, IAtomizerInventory>(CreateApiLink, "post");

export const useCreateQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([CreateApiLink]);
}

export interface ICreateDefaultFormProps extends Partial<IFormProps<IAtomizerInventoryCreate, IAtomizerInventory>> {
}

export const CreateDefaultForm: FC<ICreateDefaultFormProps> = props => <Form<IAtomizerInventoryCreate, IAtomizerInventory>
	useMutation={useCreateMutation}
	{...props}
/>

export const toCreateLink = (queryParams?: ICreateQueryParams) => toLink(CreateApiLink, queryParams);
export const useCreateLink = () => toCreateLink;

export const useCreatePromise = createPromiseHook<IAtomizerInventoryCreate, IAtomizerInventory>(CreateApiLink, "post");

export const CreatePromise = createPromise<IAtomizerInventoryCreate, IAtomizerInventory>(CreateApiLink, "post");
