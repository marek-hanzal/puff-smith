/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {ILiquidCleverMixInfo, ILiquidCleverMixInfoRequest} from "@/puff-smith/service/liquid";
import {createPromise, createPromiseHook, createQueryHook, toLink} from "@leight-core/client";
import {useQueryClient} from "react-query";

export const CleverMixInfoApiLink = "/api/liquid/clever-mix/info";

export type ICleverMixInfoQueryParams = undefined;

export const useCleverMixInfoQuery = createQueryHook<ILiquidCleverMixInfoRequest, ILiquidCleverMixInfo, ICleverMixInfoQueryParams>(CleverMixInfoApiLink, "post");

export const toCleverMixInfoLink = (queryParams?: ICleverMixInfoQueryParams) => toLink(CleverMixInfoApiLink, queryParams);
export const useCleverMixInfoLink = () => toCleverMixInfoLink;

export const useCleverMixInfoPromise = createPromiseHook<ILiquidCleverMixInfoRequest, ILiquidCleverMixInfo, ICleverMixInfoQueryParams>(CleverMixInfoApiLink, "post");
export const CleverMixInfoPromise = createPromise<ILiquidCleverMixInfoRequest, ILiquidCleverMixInfo, ICleverMixInfoQueryParams>(CleverMixInfoApiLink, "post");

export const useCleverMixInfoQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([CleverMixInfoApiLink]);
}
