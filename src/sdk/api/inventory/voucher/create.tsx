/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IVoucherInventorySource} from "@/puff-smith/service/voucher/inventory/interface";
import {ISourceCreate, ISourceItem} from "@leight-core/api";
import {createMutationHook, createPromise, createPromiseHook, Form, IFormProps, toLink} from "@leight-core/client";
import {FC} from "react";

export const CreateApiLink = "/api/inventory/voucher/create";

export type ICreateQueryParams = any;

export const useCreateMutation = createMutationHook<ISourceCreate<IVoucherInventorySource>, ISourceItem<IVoucherInventorySource>>(CreateApiLink, "post");

export interface ICreateDefaultFormProps extends Partial<IFormProps<ISourceCreate<IVoucherInventorySource>, ISourceItem<IVoucherInventorySource>>> {
}

export const CreateDefaultForm: FC<ICreateDefaultFormProps> = props => <Form<ISourceCreate<IVoucherInventorySource>, ISourceItem<IVoucherInventorySource>>
	useMutation={useCreateMutation}
	{...props}
/>

export const toCreateLink = (queryParams?: ICreateQueryParams) => toLink(CreateApiLink, queryParams);
export const useCreateLink = () => toCreateLink;

export const useCreatePromise = createPromiseHook<ISourceCreate<IVoucherInventorySource>, ISourceItem<IVoucherInventorySource>>(CreateApiLink, "post");

export const CreatePromise = createPromise<ISourceCreate<IVoucherInventorySource>, ISourceItem<IVoucherInventorySource>>(CreateApiLink, "post");
