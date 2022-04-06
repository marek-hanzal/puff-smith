/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {ILiquid, ILiquidQuickMix} from "@/puff-smith/service/liquid";
import {createMutationHook, createPromiseHook, Form, IFormProps, useLinkContext} from "@leight-core/client";
import {FC} from "react";
import {useQueryClient} from "react-query";

export const QuickMixApiLink = "/api/liquid/quick-mix/index";

export type IQuickMixQueryParams = undefined;

export const useQuickMixMutation = createMutationHook<Omit<ILiquidQuickMix, "userId">, ILiquid>(QuickMixApiLink, "post");

export const useQuickMixQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([QuickMixApiLink]);
}

export interface IQuickMixDefaultFormProps extends Partial<IFormProps<Omit<ILiquidQuickMix, "userId">, ILiquid>> {
}

export const QuickMixDefaultForm: FC<IQuickMixDefaultFormProps> = props => <Form<Omit<ILiquidQuickMix, "userId">, ILiquid>
	useMutation={useQuickMixMutation}
	{...props}
/>

export const useQuickMixLink = (): ((query: IQuickMixQueryParams) => string) => {
	const linkContext = useLinkContext();
	return query => linkContext.link(QuickMixApiLink, query);
}

export const useQuickMixPromise = createPromiseHook<Omit<ILiquidQuickMix, "userId">, ILiquid>(QuickMixApiLink, "post");
