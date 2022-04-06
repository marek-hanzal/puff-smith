/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {ICheckRequest, ICheckResponse} from "@/puff-smith/service/transaction";
import {createPromiseHook, createQueryHook, useLinkContext} from "@leight-core/client";
import {useQueryClient} from "react-query";

export const CheckPriceApiLink = "/api/transaction/check-price";

export type ICheckPriceQueryParams = undefined;

export const useCheckPriceQuery = createQueryHook<Omit<ICheckRequest, "userId">, ICheckResponse, ICheckPriceQueryParams>(CheckPriceApiLink, "post");

export const useCheckPriceLink = (): ((queryParams?: ICheckPriceQueryParams) => string) => {
	const linkContext = useLinkContext();
	return queryParams => linkContext.link(CheckPriceApiLink, queryParams);
}

export const useCheckPricePromise = createPromiseHook<Omit<ICheckRequest, "userId">, ICheckResponse, ICheckPriceQueryParams>(CheckPriceApiLink, "post");

export const useCheckPriceQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([CheckPriceApiLink]);
}
