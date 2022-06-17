/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {ICellInventorySource} from "@/puff-smith/service/cell/inventory/interface";
import {ISourceCreate, ISourceItem} from "@leight-core/api";
import {createMutationHook, createPromise, createPromiseHook, Form, IFormProps, toLink} from "@leight-core/client";
import {FC} from "react";
import {useQueryClient} from "react-query";

export const CreateApiLink = "/api/inventory/cell/create";

export type ICreateQueryParams = any;

export const useCreateMutation = createMutationHook<ISourceCreate<ICellInventorySource>, ISourceItem<ICellInventorySource>>(CreateApiLink, "post");

export const useCreateQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([CreateApiLink]);
}

export interface ICreateDefaultFormProps extends Partial<IFormProps<ISourceCreate<ICellInventorySource>, ISourceItem<ICellInventorySource>>> {
}

export const CreateDefaultForm: FC<ICreateDefaultFormProps> = props => <Form<ISourceCreate<ICellInventorySource>, ISourceItem<ICellInventorySource>>
	useMutation={useCreateMutation}
	{...props}
/>

export const toCreateLink = (queryParams?: ICreateQueryParams) => toLink(CreateApiLink, queryParams);
export const useCreateLink = () => toCreateLink;

export const useCreatePromise = createPromiseHook<ISourceCreate<ICellInventorySource>, ISourceItem<ICellInventorySource>>(CreateApiLink, "post");

export const CreatePromise = createPromise<ISourceCreate<ICellInventorySource>, ISourceItem<ICellInventorySource>>(CreateApiLink, "post");
