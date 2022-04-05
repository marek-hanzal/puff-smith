/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {ILiquid, ILiquidCreate} from "@/puff-smith/service/liquid";
import {createMutationHook, createPromiseHook, Form, IFormProps, useLinkContext} from "@leight-core/client";
import {FC} from "react";
import {useQueryClient} from "react-query";

export const CreateApiLink = "/api/liquid/create";

export type ICreateQueryParams = undefined;

export const useCreateMutation = createMutationHook<Omit<ILiquidCreate, "userId">, ILiquid>(CreateApiLink, "post");

export const useCreateQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([CreateApiLink]);
};

export interface ICreateDefaultFormProps extends Partial<IFormProps<Omit<ILiquidCreate, "userId">, ILiquid>> {
}

export const CreateDefaultForm: FC<ICreateDefaultFormProps> = props => <Form<Omit<ILiquidCreate, "userId">, ILiquid>
	useMutation={useCreateMutation}
	{...props}
/>;

export const useCreateLink = (): ((query: ICreateQueryParams) => string) => {
	const linkContext = useLinkContext();
	return query => linkContext.link(CreateApiLink, query);
};

export const useCreatePromise = createPromiseHook<Omit<ILiquidCreate, "userId">, ILiquid>(CreateApiLink, "post");
