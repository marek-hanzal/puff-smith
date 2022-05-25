/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {ITransactionSource} from "@/puff-smith/service/transaction/interface";
import {ISourceCreate, ISourceItem} from "@leight-core/api";
import {createMutationHook, createPromise, createPromiseHook, Form, IFormProps, toLink} from "@leight-core/client";
import {FC} from "react";
import {useQueryClient} from "react-query";

export const CreateApiLink = "/api/transaction/create";

export type ICreateQueryParams = undefined;

export const useCreateMutation = createMutationHook<ISourceCreate<ITransactionSource>, ISourceItem<ITransactionSource>>(CreateApiLink, "post");

export const useCreateQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([CreateApiLink]);
}

export interface ICreateDefaultFormProps extends Partial<IFormProps<ISourceCreate<ITransactionSource>, ISourceItem<ITransactionSource>>> {
}

export const CreateDefaultForm: FC<ICreateDefaultFormProps> = props => <Form<ISourceCreate<ITransactionSource>, ISourceItem<ITransactionSource>>
	useMutation={useCreateMutation}
	{...props}
/>

export const toCreateLink = (queryParams?: ICreateQueryParams) => toLink(CreateApiLink, queryParams);
export const useCreateLink = () => toCreateLink;

export const useCreatePromise = createPromiseHook<ISourceCreate<ITransactionSource>, ISourceItem<ITransactionSource>>(CreateApiLink, "post");

export const CreatePromise = createPromise<ISourceCreate<ITransactionSource>, ISourceItem<ITransactionSource>>(CreateApiLink, "post");
