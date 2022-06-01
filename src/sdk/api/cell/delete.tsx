/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {ICellSource} from "@/puff-smith/service/cell/interface";
import {ISourceItem} from "@leight-core/api";
import {createMutationHook, createPromise, createPromiseHook, toLink} from "@leight-core/client";

export const DeleteApiLink = "/api/cell/delete";

export type IDeleteQueryParams = undefined;

export const useDeleteMutation = createMutationHook<string[], ISourceItem<ICellSource>>(DeleteApiLink, "post");

export const toDeleteLink = (queryParams?: IDeleteQueryParams) => toLink(DeleteApiLink, queryParams);
export const useDeleteLink = () => toDeleteLink;

export const useDeletePromise = createPromiseHook<string[], ISourceItem<ICellSource>>(DeleteApiLink, "post");

export const DeletePromise = createPromise<string[], ISourceItem<ICellSource>>(DeleteApiLink, "post");
