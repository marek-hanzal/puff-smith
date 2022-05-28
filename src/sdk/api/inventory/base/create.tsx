/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IBaseInventorySource} from "@/puff-smith/service/base/inventory/interface";
import {ISourceCreate, ISourceItem} from "@leight-core/api";
import {createMutationHook, createPromise, createPromiseHook, Form, IFormProps, toLink} from "@leight-core/client";
import {FC} from "react";
import {useQueryClient} from "react-query";

export const CreateApiLink = "/api/inventory/base/create";

export type ICreateQueryParams = undefined;

export const useCreateMutation = createMutationHook<ISourceCreate<IBaseInventorySource>, ISourceItem<IBaseInventorySource>>(CreateApiLink, "post");

export const useCreateQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([CreateApiLink]);
}

export interface ICreateDefaultFormProps extends Partial<IFormProps<ISourceCreate<IBaseInventorySource>, ISourceItem<IBaseInventorySource>>> {
}

export const CreateDefaultForm: FC<ICreateDefaultFormProps> = props => <Form<ISourceCreate<IBaseInventorySource>, ISourceItem<IBaseInventorySource>>
	useMutation={useCreateMutation}
	{...props}
/>

export const toCreateLink = (queryParams?: ICreateQueryParams) => toLink(CreateApiLink, queryParams);
export const useCreateLink = () => toCreateLink;

export const useCreatePromise = createPromiseHook<ISourceCreate<IBaseInventorySource>, ISourceItem<IBaseInventorySource>>(CreateApiLink, "post");

export const CreatePromise = createPromise<ISourceCreate<IBaseInventorySource>, ISourceItem<IBaseInventorySource>>(CreateApiLink, "post");
