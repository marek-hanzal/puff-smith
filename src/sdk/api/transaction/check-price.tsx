/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */
 
import {ICheckRequest, ICheckResponse} from "@/puff-smith/service/transaction/interface";
import {TransactionService} from "@/puff-smith/service/transaction/TransactionService";
import {RequestEndpoint} from "@leight-core/server/lib/cjs/endpoint/endpoints";
import {useQueryClient} from "react-query";
import {createPromise, createPromiseHook, createQueryHook, toLink} from "@leight-core/client";

export const CheckPriceApiLink = "/api/transaction/check-price";

export type ICheckPriceQueryParams = undefined;

export const useCheckPriceQuery = createQueryHook<Omit<ICheckRequest, "userId">, ICheckResponse, ICheckPriceQueryParams>(CheckPriceApiLink, "post");

export const toCheckPriceLink = (queryParams?: ICheckPriceQueryParams) => toLink(CheckPriceApiLink, queryParams);
export const useCheckPriceLink = () => toCheckPriceLink;

export const useCheckPricePromise = createPromiseHook<Omit<ICheckRequest, "userId">, ICheckResponse, ICheckPriceQueryParams>(CheckPriceApiLink, "post");
export const CheckPricePromise = createPromise<Omit<ICheckRequest, "userId">, ICheckResponse, ICheckPriceQueryParams>(CheckPriceApiLink, "post");

export const useCheckPriceQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([CheckPriceApiLink]);
}
