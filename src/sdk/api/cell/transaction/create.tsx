import {ICellTransaction, ICellTransactionCreate} from "@/puff-smith/service/cell";
import {FC} from "react";
import {useQueryClient} from "react-query";
import {createMutationHook, createPromiseHook, Form, IFormProps, useLinkContext} from "@leight-core/client";

export const CreateApiLink = "/api/cell/transaction/create";

export type ICreateQueryParams = undefined;

export const useCreateMutation = createMutationHook<Omit<ICellTransactionCreate, "userId">, ICellTransaction>(CreateApiLink, "post");

export const useCreateQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([CreateApiLink]);
}

export interface ICreateDefaultFormProps extends Partial<IFormProps<Omit<ICellTransactionCreate, "userId">, ICellTransaction>> {
}

export const CreateDefaultForm: FC<ICreateDefaultFormProps> = props => <Form<Omit<ICellTransactionCreate, "userId">, ICellTransaction>
	useMutation={useCreateMutation}
	{...props}
/>

export const useCreateLink = (): ((query: ICreateQueryParams) => string) => {
	const linkContext = useLinkContext();
	return query => linkContext.link(CreateApiLink, query);
}

export const useCreatePromise = createPromiseHook<Omit<ICellTransactionCreate, "userId">, ICellTransaction>(CreateApiLink, "post");
