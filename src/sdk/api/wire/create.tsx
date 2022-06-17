/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IWireSource} from "@/puff-smith/service/wire/interface";
import {ISourceCreate, ISourceItem} from "@leight-core/api";
import {createMutationHook, createPromise, createPromiseHook, Form, IFormProps, toLink} from "@leight-core/client";
import {FC} from "react";
import {useQueryClient} from "react-query";

export const CreateApiLink = "/api/wire/create";

export type ICreateQueryParams = any;

export const useCreateMutation = createMutationHook<ISourceCreate<IWireSource>, ISourceItem<IWireSource>>(CreateApiLink, "post");

export const useCreateQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([CreateApiLink]);
}

export interface ICreateDefaultFormProps extends Partial<IFormProps<ISourceCreate<IWireSource>, ISourceItem<IWireSource>>> {
}

export const CreateDefaultForm: FC<ICreateDefaultFormProps> = props => <Form<ISourceCreate<IWireSource>, ISourceItem<IWireSource>>
	useMutation={useCreateMutation}
	{...props}
/>

export const toCreateLink = (queryParams?: ICreateQueryParams) => toLink(CreateApiLink, queryParams);
export const useCreateLink = () => toCreateLink;

export const useCreatePromise = createPromiseHook<ISourceCreate<IWireSource>, ISourceItem<IWireSource>>(CreateApiLink, "post");

export const CreatePromise = createPromise<ISourceCreate<IWireSource>, ISourceItem<IWireSource>>(CreateApiLink, "post");
