/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IModInventorySource} from "@/puff-smith/service/mod/inventory/interface";
import {ISourceCreate, ISourceItem} from "@leight-core/api";
import {createMutationHook, createPromise, createPromiseHook, Form, IFormProps, toLink} from "@leight-core/client";
import {FC} from "react";
import {useQueryClient} from "react-query";

export const CreateApiLink = "/api/mod/inventory/create";

export type ICreateQueryParams = undefined;

export const useCreateMutation = createMutationHook<ISourceCreate<IModInventorySource>, ISourceItem<IModInventorySource>>(CreateApiLink, "post");

export const useCreateQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([CreateApiLink]);
}

export interface ICreateDefaultFormProps extends Partial<IFormProps<ISourceCreate<IModInventorySource>, ISourceItem<IModInventorySource>>> {
}

export const CreateDefaultForm: FC<ICreateDefaultFormProps> = props => <Form<ISourceCreate<IModInventorySource>, ISourceItem<IModInventorySource>>
	useMutation={useCreateMutation}
	{...props}
/>;

export const toCreateLink = (queryParams?: ICreateQueryParams) => toLink(CreateApiLink, queryParams);
export const useCreateLink = () => toCreateLink;

export const useCreatePromise = createPromiseHook<ISourceCreate<IModInventorySource>, ISourceItem<IModInventorySource>>(CreateApiLink, "post");

export const CreatePromise = createPromise<ISourceCreate<IModInventorySource>, ISourceItem<IModInventorySource>>(CreateApiLink, "post");
