import {IAtomizerTransaction, IAtomizerTransactionCreate} from "@/puff-smith/service/atomizer";
import {FC} from "react";
import {useQueryClient} from "react-query";
import {createMutationHook, createPromiseHook, Form, IFormProps, useLinkContext} from "@leight-core/client";

export const CreateApiLink = "/api/atomizer/transaction/create";

export type ICreateQueryParams = undefined;

export const useCreateMutation = createMutationHook<Omit<IAtomizerTransactionCreate, "userId">, IAtomizerTransaction>(CreateApiLink, "post");

export const useCreateQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([CreateApiLink]);
}

export interface ICreateDefaultFormProps extends Partial<IFormProps<Omit<IAtomizerTransactionCreate, "userId">, IAtomizerTransaction>> {
}

export const CreateDefaultForm: FC<ICreateDefaultFormProps> = props => <Form<Omit<IAtomizerTransactionCreate, "userId">, IAtomizerTransaction>
	useMutation={useCreateMutation}
	{...props}
/>

export const useCreateLink = (): ((query: ICreateQueryParams) => string) => {
	const linkContext = useLinkContext();
	return query => linkContext.link(CreateApiLink, query);
}

export const useCreatePromise = createPromiseHook<Omit<IAtomizerTransactionCreate, "userId">, IAtomizerTransaction>(CreateApiLink, "post");
