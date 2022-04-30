/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {ITransaction, ITransactionCreate} from "@/puff-smith/service/transaction/interface";
import {TransactionService} from "@/puff-smith/service/transaction/TransactionService";
import {CreateEndpoint} from "@leight-core/server";
import {FC} from "react";
import {IQueryParams} from "@leight-core/api";
import {useQueryClient} from "react-query";
import {Form, IFormProps, ISourceProviderProps, createMutationHook, createPromise, createPromiseHook, createQueryHook, toLink, useSourceContext} from "@leight-core/client";

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
