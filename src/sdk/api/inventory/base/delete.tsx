/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IBaseInventorySource} from "@/puff-smith/service/base/inventory/interface";
import {ISourceItem} from "@leight-core/api";
import {createMutationHook, createPromise, createPromiseHook, toLink} from "@leight-core/client";

export const DeleteApiLink = "/api/inventory/base/delete";

export type IDeleteQueryParams = any;

export const useDeleteMutation = createMutationHook<string[], ISourceItem<IBaseInventorySource>>(DeleteApiLink, "post");

export const toDeleteLink = (queryParams?: IDeleteQueryParams) => toLink(DeleteApiLink, queryParams);
export const useDeleteLink = () => toDeleteLink;

export const useDeletePromise = createPromiseHook<string[], ISourceItem<IBaseInventorySource>>(DeleteApiLink, "post");

export const DeletePromise = createPromise<string[], ISourceItem<IBaseInventorySource>>(DeleteApiLink, "post");
