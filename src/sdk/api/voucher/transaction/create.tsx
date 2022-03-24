import {IVoucherTransaction, IVoucherTransactionCreate} from "@/puff-smith/service/voucher";
import {FC} from "react";
import {useQueryClient} from "react-query";
import {createMutationHook, createPromiseHook, Form, IFormProps, useLinkContext} from "@leight-core/client";

export const CreateApiLink = "/api/voucher/transaction/create";

export type ICreateQueryParams = undefined;

export const useCreateMutation = createMutationHook<Omit<IVoucherTransactionCreate, "userId">, IVoucherTransaction>(CreateApiLink, "post");

export const useCreateQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([CreateApiLink]);
}

export interface ICreateDefaultFormProps extends Partial<IFormProps<Omit<IVoucherTransactionCreate, "userId">, IVoucherTransaction>> {
}

export const CreateDefaultForm: FC<ICreateDefaultFormProps> = props => <Form<Omit<IVoucherTransactionCreate, "userId">, IVoucherTransaction>
	useMutation={useCreateMutation}
	{...props}
/>

export const useCreateLink = (): ((query: ICreateQueryParams) => string) => {
	const linkContext = useLinkContext();
	return query => linkContext.link(CreateApiLink, query);
}

export const useCreatePromise = createPromiseHook<Omit<IVoucherTransactionCreate, "userId">, IVoucherTransaction>(CreateApiLink, "post");
