/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IAromaSource} from "@/puff-smith/service/aroma/interface";
import {SourceInfer}  from "@leight-core/api";
import {
	createMutationHook,
	createPromise,
	createPromiseHook,
	toLink
}                     from "@leight-core/client";

export const AromaDeleteApiLink = "/api/aroma/delete";

export type IAromaDeleteQueryParams = any;

export const useAromaDeleteMutation = createMutationHook<string[], SourceInfer.Item<IAromaSource>, IAromaDeleteQueryParams>(AromaDeleteApiLink, "post");

export const toAromaDeleteLink  = (queryParams?: IAromaDeleteQueryParams) => toLink(AromaDeleteApiLink, queryParams);
export const useAromaDeleteLink = () => toAromaDeleteLink;

export const useAromaDeletePromise = createPromiseHook<string[], SourceInfer.Item<IAromaSource>, IAromaDeleteQueryParams>(AromaDeleteApiLink, "post");

export const AromaDeletePromise = createPromise<string[], SourceInfer.Item<IAromaSource>, IAromaDeleteQueryParams>(AromaDeleteApiLink, "post");
