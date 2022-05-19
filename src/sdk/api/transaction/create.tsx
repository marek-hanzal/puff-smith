/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {ITransaction, ITransactionCreate} from "@/puff-smith/service/transaction/interface";
import {createMutationHook, createPromise, createPromiseHook, Form, IFormProps, toLink} from "@leight-core/client";
import {FC} from "react";
import {useQueryClient} from "react-query";

export const CreateApiLink = "/api/transaction/create";

export type ICreateQueryParams = undefined;

export const useCreateMutation = createMutationHook<ITransactionCreate, ITransaction>(CreateApiLink, "post");

export const useCreateQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([CreateApiLink]);
}

export interface ICreateDefaultFormProps extends Partial<IFormProps<ITransactionCreate, ITransaction>> {
}

export const CreateDefaultForm: FC<ICreateDefaultFormProps> = props => <Form<ITransactionCreate, ITransaction>
	useMutation={useCreateMutation}
	{...props}
/>

export const toCreateLink = (queryParams?: ICreateQueryParams) => toLink(CreateApiLink, queryParams);
export const useCreateLink = () => toCreateLink;

export const useCreatePromise = createPromiseHook<ITransactionCreate, ITransaction>(CreateApiLink, "post");

export const CreatePromise = createPromise<ITransactionCreate, ITransaction>(CreateApiLink, "post");
