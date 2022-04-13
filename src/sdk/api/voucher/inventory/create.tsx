/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IVoucherInventory, IVoucherInventoryCreate} from "@/puff-smith/service/voucher";
import {createMutationHook, createPromise, createPromiseHook, Form, IFormProps, toLink} from "@leight-core/client";
import {FC} from "react";
import {useQueryClient} from "react-query";

export const CreateApiLink = "/api/voucher/inventory/create";

export type ICreateQueryParams = undefined;

export const useCreateMutation = createMutationHook<Omit<IVoucherInventoryCreate, "userId">, IVoucherInventory>(CreateApiLink, "post");

export const useCreateQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([CreateApiLink]);
}

export interface ICreateDefaultFormProps extends Partial<IFormProps<Omit<IVoucherInventoryCreate, "userId">, IVoucherInventory>> {
}

export const CreateDefaultForm: FC<ICreateDefaultFormProps> = props => <Form<Omit<IVoucherInventoryCreate, "userId">, IVoucherInventory>
	useMutation={useCreateMutation}
	{...props}
/>

export const toCreateLink = (queryParams?: ICreateQueryParams) => toLink(CreateApiLink, queryParams);
export const useCreateLink = () => toCreateLink;

export const useCreatePromise = createPromiseHook<Omit<IVoucherInventoryCreate, "userId">, IVoucherInventory>(CreateApiLink, "post");

export const CreatePromise = createPromise<Omit<IVoucherInventoryCreate, "userId">, IVoucherInventory>(CreateApiLink, "post");
