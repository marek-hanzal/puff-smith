/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IWireInventory, IWireInventoryCreate} from "@/puff-smith/service/wire/inventory/interface";
import {createMutationHook, createPromise, createPromiseHook, Form, IFormProps, toLink} from "@leight-core/client";
import {FC} from "react";
import {useQueryClient} from "react-query";

export const CreateApiLink = "/api/wire/inventory/create";

export type ICreateQueryParams = undefined;

export const useCreateMutation = createMutationHook<IWireInventoryCreate, IWireInventory>(CreateApiLink, "post");

export const useCreateQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([CreateApiLink]);
};

export interface ICreateDefaultFormProps extends Partial<IFormProps<IWireInventoryCreate, IWireInventory>> {
}

export const CreateDefaultForm: FC<ICreateDefaultFormProps> = props => <Form<IWireInventoryCreate, IWireInventory>
	useMutation={useCreateMutation}
	{...props}
/>;

export const toCreateLink = (queryParams?: ICreateQueryParams) => toLink(CreateApiLink, queryParams);
export const useCreateLink = () => toCreateLink;

export const useCreatePromise = createPromiseHook<IWireInventoryCreate, IWireInventory>(CreateApiLink, "post");

export const CreatePromise = createPromise<IWireInventoryCreate, IWireInventory>(CreateApiLink, "post");
