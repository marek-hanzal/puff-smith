/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IWireInventorySource} from "@/puff-smith/service/wire/inventory/interface";
import {ISourceCreate, ISourceItem} from "@leight-core/api";
import {createMutationHook, createPromise, createPromiseHook, Form, IFormProps, toLink} from "@leight-core/client";
import {FC} from "react";
import {useQueryClient} from "react-query";

export const CreateApiLink = "/api/wire/inventory/create";

export type ICreateQueryParams = undefined;

export const useCreateMutation = createMutationHook<ISourceCreate<IWireInventorySource>, ISourceItem<IWireInventorySource>>(CreateApiLink, "post");

export const useCreateQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([CreateApiLink]);
}

export interface ICreateDefaultFormProps extends Partial<IFormProps<ISourceCreate<IWireInventorySource>, ISourceItem<IWireInventorySource>>> {
}

export const CreateDefaultForm: FC<ICreateDefaultFormProps> = props => <Form<ISourceCreate<IWireInventorySource>, ISourceItem<IWireInventorySource>>
	useMutation={useCreateMutation}
	{...props}
/>;

export const toCreateLink = (queryParams?: ICreateQueryParams) => toLink(CreateApiLink, queryParams);
export const useCreateLink = () => toCreateLink;

export const useCreatePromise = createPromiseHook<ISourceCreate<IWireInventorySource>, ISourceItem<IWireInventorySource>>(CreateApiLink, "post");

export const CreatePromise = createPromise<ISourceCreate<IWireInventorySource>, ISourceItem<IWireInventorySource>>(CreateApiLink, "post");
