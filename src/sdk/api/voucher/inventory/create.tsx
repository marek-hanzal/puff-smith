/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {ServiceCreate} from "@/puff-smith/service";
import {IVoucherInventory, IVoucherInventoryCreate} from "@/puff-smith/service/voucher/inventory/interface";
import {VoucherInventoryService} from "@/puff-smith/service/voucher/inventory/VoucherInventoryService";
import {MutationEndpoint} from "@leight-core/server";
import {FC} from "react";
import {IQueryParams} from "@leight-core/api";
import {useQueryClient} from "react-query";
import {Form, IFormProps, ISourceProviderProps, createMutationHook, createPromise, createPromiseHook, createQueryHook, toLink, useSourceContext} from "@leight-core/client";

export const CreateApiLink = "/api/voucher/inventory/create";

export type ICreateQueryParams = undefined;

export const useCreateMutation = createMutationHook<IVoucherInventoryCreate, IVoucherInventory>(CreateApiLink, "post");

export const useCreateQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([CreateApiLink]);
}

export interface ICreateDefaultFormProps extends Partial<IFormProps<IVoucherInventoryCreate, IVoucherInventory>> {
}

export const CreateDefaultForm: FC<ICreateDefaultFormProps> = props => <Form<IVoucherInventoryCreate, IVoucherInventory>
	useMutation={useCreateMutation}
	{...props}
/>

export const toCreateLink = (queryParams?: ICreateQueryParams) => toLink(CreateApiLink, queryParams);
export const useCreateLink = () => toCreateLink;

export const useCreatePromise = createPromiseHook<IVoucherInventoryCreate, IVoucherInventory>(CreateApiLink, "post");

export const CreatePromise = createPromise<IVoucherInventoryCreate, IVoucherInventory>(CreateApiLink, "post");
