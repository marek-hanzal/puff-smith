/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {ICellInventory, ICellInventoryCreate} from "@/puff-smith/service/cell";
import {createMutationHook, createPromiseHook, Form, IFormProps, useLinkContext} from "@leight-core/client";
import {FC} from "react";
import {useQueryClient} from "react-query";

export const CreateApiLink = "/api/cell/inventory/create";

export type ICreateQueryParams = undefined;

export const useCreateMutation = createMutationHook<Omit<ICellInventoryCreate, "userId">, ICellInventory>(CreateApiLink, "post");

export const useCreateQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([CreateApiLink]);
};

export interface ICreateDefaultFormProps extends Partial<IFormProps<Omit<ICellInventoryCreate, "userId">, ICellInventory>> {
}

export const CreateDefaultForm: FC<ICreateDefaultFormProps> = props => <Form<Omit<ICellInventoryCreate, "userId">, ICellInventory>
	useMutation={useCreateMutation}
	{...props}
/>;

export const useCreateLink = (): ((query: ICreateQueryParams) => string) => {
	const linkContext = useLinkContext();
	return query => linkContext.link(CreateApiLink, query);
};

export const useCreatePromise = createPromiseHook<Omit<ICellInventoryCreate, "userId">, ICellInventory>(CreateApiLink, "post");
