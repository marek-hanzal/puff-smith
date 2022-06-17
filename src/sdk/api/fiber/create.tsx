/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IFiberSource} from "@/puff-smith/service/fiber/interface";
import {ISourceCreate, ISourceItem} from "@leight-core/api";
import {createMutationHook, createPromise, createPromiseHook, Form, IFormProps, toLink} from "@leight-core/client";
import {FC} from "react";
import {useQueryClient} from "react-query";

export const CreateApiLink = "/api/fiber/create";

export type ICreateQueryParams = any;

export const useCreateMutation = createMutationHook<ISourceCreate<IFiberSource>, ISourceItem<IFiberSource>>(CreateApiLink, "post");

export const useCreateQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([CreateApiLink]);
}

export interface ICreateDefaultFormProps extends Partial<IFormProps<ISourceCreate<IFiberSource>, ISourceItem<IFiberSource>>> {
}

export const CreateDefaultForm: FC<ICreateDefaultFormProps> = props => <Form<ISourceCreate<IFiberSource>, ISourceItem<IFiberSource>>
	useMutation={useCreateMutation}
	{...props}
/>

export const toCreateLink = (queryParams?: ICreateQueryParams) => toLink(CreateApiLink, queryParams);
export const useCreateLink = () => toCreateLink;

export const useCreatePromise = createPromiseHook<ISourceCreate<IFiberSource>, ISourceItem<IFiberSource>>(CreateApiLink, "post");

export const CreatePromise = createPromise<ISourceCreate<IFiberSource>, ISourceItem<IFiberSource>>(CreateApiLink, "post");
