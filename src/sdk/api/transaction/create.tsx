import {ITransaction, ITransactionCreate} from "@/puff-smith/service/transaction";
import {FC} from "react";
import {useQueryClient} from "react-query";
import {createMutationHook, createPromiseHook, Form, IFormProps, useLinkContext} from "@leight-core/client";

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

export const useCreateLink = (): ((query: ICreateQueryParams) => string) => {
	const linkContext = useLinkContext();
	return query => linkContext.link(CreateApiLink, query);
}

export const useCreatePromise = createPromiseHook<ITransactionCreate, ITransaction>(CreateApiLink, "post");