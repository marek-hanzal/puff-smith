/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {ILiquidSource} from "@/puff-smith/service/liquid/interface";
import {ISourceCreate, ISourceItem} from "@leight-core/api";
import {createMutationHook, createPromise, createPromiseHook, Form, IFormProps, toLink} from "@leight-core/client";
import {FC} from "react";
import {useQueryClient} from "react-query";

export const CreateApiLink = "/api/lab/liquid/create";

export type ICreateQueryParams = undefined;

export const useCreateMutation = createMutationHook<ISourceCreate<ILiquidSource>, ISourceItem<ILiquidSource>>(CreateApiLink, "post");

export const useCreateQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([CreateApiLink]);
}

export interface ICreateDefaultFormProps extends Partial<IFormProps<ISourceCreate<ILiquidSource>, ISourceItem<ILiquidSource>>> {
}

export const CreateDefaultForm: FC<ICreateDefaultFormProps> = props => <Form<ISourceCreate<ILiquidSource>, ISourceItem<ILiquidSource>>
	useMutation={useCreateMutation}
	{...props}
/>

export const toCreateLink = (queryParams?: ICreateQueryParams) => toLink(CreateApiLink, queryParams);
export const useCreateLink = () => toCreateLink;

export const useCreatePromise = createPromiseHook<ISourceCreate<ILiquidSource>, ISourceItem<ILiquidSource>>(CreateApiLink, "post");

export const CreatePromise = createPromise<ISourceCreate<ILiquidSource>, ISourceItem<ILiquidSource>>(CreateApiLink, "post");
