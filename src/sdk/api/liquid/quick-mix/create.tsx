/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {ILiquid, ILiquidQuickMix} from "@/puff-smith/service/liquid";
import {createMutationHook, createPromiseHook, Form, IFormProps, useLinkContext} from "@leight-core/client";
import {FC} from "react";
import {useQueryClient} from "react-query";

export const CreateQuickMixApiLink = "/api/liquid/quick-mix/create";

export type ICreateQuickMixQueryParams = undefined;

export const useCreateQuickMixMutation = createMutationHook<Omit<ILiquidQuickMix, "userId">, ILiquid>(CreateQuickMixApiLink, "post");

export const useCreateQuickMixQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([CreateQuickMixApiLink]);
}

export interface ICreateQuickMixDefaultFormProps extends Partial<IFormProps<Omit<ILiquidQuickMix, "userId">, ILiquid>> {
}

export const CreateQuickMixDefaultForm: FC<ICreateQuickMixDefaultFormProps> = props => <Form<Omit<ILiquidQuickMix, "userId">, ILiquid>
	useMutation={useCreateQuickMixMutation}
	{...props}
/>

export const useCreateQuickMixLink = (): ((query: ICreateQuickMixQueryParams) => string) => {
	const linkContext = useLinkContext();
	return query => linkContext.link(CreateQuickMixApiLink, query);
}

export const useCreateQuickMixPromise = createPromiseHook<Omit<ILiquidQuickMix, "userId">, ILiquid>(CreateQuickMixApiLink, "post");
