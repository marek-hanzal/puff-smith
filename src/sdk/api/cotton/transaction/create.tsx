import {ICottonTransaction, ICottonTransactionCreate} from "@/puff-smith/service/cotton";
import {FC} from "react";
import {useQueryClient} from "react-query";
import {createMutationHook, createPromiseHook, Form, IFormProps, useLinkContext} from "@leight-core/client";

export const CreateApiLink = "/api/cotton/transaction/create";

export type ICreateQueryParams = undefined;

export const useCreateMutation = createMutationHook<Omit<ICottonTransactionCreate, "userId">, ICottonTransaction>(CreateApiLink, "post");

export const useCreateQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([CreateApiLink]);
}

export interface ICreateDefaultFormProps extends Partial<IFormProps<Omit<ICottonTransactionCreate, "userId">, ICottonTransaction>> {
}

export const CreateDefaultForm: FC<ICreateDefaultFormProps> = props => <Form<Omit<ICottonTransactionCreate, "userId">, ICottonTransaction>
	useMutation={useCreateMutation}
	{...props}
/>

export const useCreateLink = (): ((query: ICreateQueryParams) => string) => {
	const linkContext = useLinkContext();
	return query => linkContext.link(CreateApiLink, query);
}

export const useCreatePromise = createPromiseHook<Omit<ICottonTransactionCreate, "userId">, ICottonTransaction>(CreateApiLink, "post");
