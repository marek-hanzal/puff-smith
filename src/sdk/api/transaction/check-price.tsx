/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {ICheckRequest, ICheckResponse} from "@/puff-smith/service/transaction/interface";
import {createPromise, createPromiseHook, createQueryHook, toLink} from "@leight-core/client";

export const CheckPriceApiLink = "/api/transaction/check-price";

export type ICheckPriceQueryParams = any;

export const useCheckPriceQuery = createQueryHook<ICheckRequest, ICheckResponse, ICheckPriceQueryParams>(CheckPriceApiLink, "post");

export const toCheckPriceLink = (queryParams?: ICheckPriceQueryParams) => toLink(CheckPriceApiLink, queryParams);
export const useCheckPriceLink = () => toCheckPriceLink;

export const useCheckPricePromise = createPromiseHook<ICheckRequest, ICheckResponse, ICheckPriceQueryParams>(CheckPriceApiLink, "post");
export const CheckPricePromise = createPromise<ICheckRequest, ICheckResponse, ICheckPriceQueryParams>(CheckPriceApiLink, "post");
