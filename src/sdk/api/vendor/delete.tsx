/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IVendorSource} from "@/puff-smith/service/vendor/interface";
import {ISourceItem} from "@leight-core/api";
import {createMutationHook, createPromise, createPromiseHook, toLink} from "@leight-core/client";

export const DeleteApiLink = "/api/vendor/delete";

export type IDeleteQueryParams = any;

export const useDeleteMutation = createMutationHook<string[], ISourceItem<IVendorSource>>(DeleteApiLink, "post");

export const toDeleteLink = (queryParams?: IDeleteQueryParams) => toLink(DeleteApiLink, queryParams);
export const useDeleteLink = () => toDeleteLink;

export const useDeletePromise = createPromiseHook<string[], ISourceItem<IVendorSource>>(DeleteApiLink, "post");

export const DeletePromise = createPromise<string[], ISourceItem<IVendorSource>>(DeleteApiLink, "post");
