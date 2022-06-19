/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IWishlistSource} from "@/puff-smith/service/wishlist/interface";
import {ISourceItem} from "@leight-core/api";
import {createMutationHook, createPromise, createPromiseHook, toLink} from "@leight-core/client";

export const DeleteApiLink = "/api/wishlist/delete";

export type IDeleteQueryParams = any;

export const useDeleteMutation = createMutationHook<string[], ISourceItem<IWishlistSource>>(DeleteApiLink, "post");

export const toDeleteLink = (queryParams?: IDeleteQueryParams) => toLink(DeleteApiLink, queryParams);
export const useDeleteLink = () => toDeleteLink;

export const useDeletePromise = createPromiseHook<string[], ISourceItem<IWishlistSource>>(DeleteApiLink, "post");

export const DeletePromise = createPromise<string[], ISourceItem<IWishlistSource>>(DeleteApiLink, "post");
