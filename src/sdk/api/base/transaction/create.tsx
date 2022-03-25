import {IBaseTransaction, IBaseTransactionCreate} from "@/puff-smith/service/base";
import {FC} from "react";
import {useQueryClient} from "react-query";
import {createMutationHook, createPromiseHook, Form, IFormProps, useLinkContext} from "@leight-core/client";

export const CreateApiLink = "/api/base/transaction/create";

export type ICreateQueryParams = undefined;

export const useCreateMutation = createMutationHook<Omit<IBaseTransactionCreate, "userId">, IBaseTransaction>(CreateApiLink, "post");

export const useCreateQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([CreateApiLink]);
}

export interface ICreateDefaultFormProps extends Partial<IFormProps<Omit<IBaseTransactionCreate, "userId">, IBaseTransaction>> {
}

export const CreateDefaultForm: FC<ICreateDefaultFormProps> = props => <Form<Omit<IBaseTransactionCreate, "userId">, IBaseTransaction>
	useMutation={useCreateMutation}
	{...props}
/>

export const useCreateLink = (): ((query: ICreateQueryParams) => string) => {
	const linkContext = useLinkContext();
	return query => linkContext.link(CreateApiLink, query);
}

export const useCreatePromise = createPromiseHook<Omit<IBaseTransactionCreate, "userId">, IBaseTransaction>(CreateApiLink, "post");
