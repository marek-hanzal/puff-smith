/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {ServiceCreate} from "@/puff-smith/service";
import {IModInventory, IModInventoryCreate} from "@/puff-smith/service/mod/inventory/interface";
import {ModInventoryService} from "@/puff-smith/service/mod/inventory/ModInventoryService";
import {handlePuffiesException} from "@/puff-smith/service/transaction/utils";
import {MutationEndpoint} from "@leight-core/server";
import {FC} from "react";
import {IQueryParams} from "@leight-core/api";
import {useQueryClient} from "react-query";
import {Form, IFormProps, ISourceProviderProps, createMutationHook, createPromise, createPromiseHook, createQueryHook, toLink, useSourceContext} from "@leight-core/client";

export const CreateApiLink = "/api/mod/inventory/create";

export type ICreateQueryParams = undefined;

export const useCreateMutation = createMutationHook<IModInventoryCreate, IModInventory>(CreateApiLink, "post");

export const useCreateQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([CreateApiLink]);
}

export interface ICreateDefaultFormProps extends Partial<IFormProps<IModInventoryCreate, IModInventory>> {
}

export const CreateDefaultForm: FC<ICreateDefaultFormProps> = props => <Form<IModInventoryCreate, IModInventory>
	useMutation={useCreateMutation}
	{...props}
/>

export const toCreateLink = (queryParams?: ICreateQueryParams) => toLink(CreateApiLink, queryParams);
export const useCreateLink = () => toCreateLink;

export const useCreatePromise = createPromiseHook<IModInventoryCreate, IModInventory>(CreateApiLink, "post");

export const CreatePromise = createPromise<IModInventoryCreate, IModInventory>(CreateApiLink, "post");
