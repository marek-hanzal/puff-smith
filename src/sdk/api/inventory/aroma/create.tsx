/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IAromaInventorySource} from "@/puff-smith/service/aroma/inventory/interface";
import {ISourceCreate, ISourceItem} from "@leight-core/api";
import {createMutationHook, createPromise, createPromiseHook, Form, IFormProps, toLink} from "@leight-core/client";
import {FC} from "react";
import {useQueryClient} from "react-query";

export const CreateApiLink = "/api/inventory/aroma/create";

export type ICreateQueryParams = undefined;

export const useCreateMutation = createMutationHook<ISourceCreate<IAromaInventorySource>, ISourceItem<IAromaInventorySource>>(CreateApiLink, "post");

export const useCreateQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([CreateApiLink]);
}

export interface ICreateDefaultFormProps extends Partial<IFormProps<ISourceCreate<IAromaInventorySource>, ISourceItem<IAromaInventorySource>>> {
}

export const CreateDefaultForm: FC<ICreateDefaultFormProps> = props => <Form<ISourceCreate<IAromaInventorySource>, ISourceItem<IAromaInventorySource>>
	useMutation={useCreateMutation}
	{...props}
/>

export const toCreateLink = (queryParams?: ICreateQueryParams) => toLink(CreateApiLink, queryParams);
export const useCreateLink = () => toCreateLink;

export const useCreatePromise = createPromiseHook<ISourceCreate<IAromaInventorySource>, ISourceItem<IAromaInventorySource>>(CreateApiLink, "post");

export const CreatePromise = createPromise<ISourceCreate<IAromaInventorySource>, ISourceItem<IAromaInventorySource>>(CreateApiLink, "post");
