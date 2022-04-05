/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {ILiquidQuickMixInfo, ILiquidQuickMixInfoRequest} from "@/puff-smith/service/liquid";
import {createPromiseHook, createQueryHook, useLinkContext} from "@leight-core/client";
import {useQueryClient} from "react-query";

export const QuickMixInfoApiLink = "/api/liquid/quick-mix/info";

export type IQuickMixInfoQueryParams = undefined;

export const useQuickMixInfoQuery = createQueryHook<ILiquidQuickMixInfoRequest, ILiquidQuickMixInfo, IQuickMixInfoQueryParams>(QuickMixInfoApiLink, "post");

export const useQuickMixInfoLink = (): ((queryParams?: IQuickMixInfoQueryParams) => string) => {
	const linkContext = useLinkContext();
	return queryParams => linkContext.link(QuickMixInfoApiLink, queryParams);
};

export const useQuickMixInfoPromise = createPromiseHook<ILiquidQuickMixInfoRequest, ILiquidQuickMixInfo, IQuickMixInfoQueryParams>(QuickMixInfoApiLink, "post");

export const useQuickMixInfoQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([QuickMixInfoApiLink]);
};