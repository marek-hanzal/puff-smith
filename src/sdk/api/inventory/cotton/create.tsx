/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {ICottonInventorySource} from "@/puff-smith/service/cotton/inventory/interface";
import {ISourceCreate, ISourceItem} from "@leight-core/api";
import {createMutationHook, createPromise, createPromiseHook, Form, IFormProps, toLink} from "@leight-core/client";
import {FC} from "react";
import {useQueryClient} from "react-query";

export const CreateApiLink = "/api/inventory/cotton/create";

export type ICreateQueryParams = any;

export const useCreateMutation = createMutationHook<ISourceCreate<ICottonInventorySource>, ISourceItem<ICottonInventorySource>>(CreateApiLink, "post");

export const useCreateQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([CreateApiLink]);
}

export interface ICreateDefaultFormProps extends Partial<IFormProps<ISourceCreate<ICottonInventorySource>, ISourceItem<ICottonInventorySource>>> {
}

export const CreateDefaultForm: FC<ICreateDefaultFormProps> = props => <Form<ISourceCreate<ICottonInventorySource>, ISourceItem<ICottonInventorySource>>
	useMutation={useCreateMutation}
	{...props}
/>

export const toCreateLink = (queryParams?: ICreateQueryParams) => toLink(CreateApiLink, queryParams);
export const useCreateLink = () => toCreateLink;

export const useCreatePromise = createPromiseHook<ISourceCreate<ICottonInventorySource>, ISourceItem<ICottonInventorySource>>(CreateApiLink, "post");

export const CreatePromise = createPromise<ISourceCreate<ICottonInventorySource>, ISourceItem<ICottonInventorySource>>(CreateApiLink, "post");
