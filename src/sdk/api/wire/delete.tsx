/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IWireSource} from "@/puff-smith/service/wire/interface";
import {ISourceItem} from "@leight-core/api";
import {createMutationHook, createPromise, createPromiseHook, toLink} from "@leight-core/client";

export const DeleteApiLink = "/api/wire/delete";

export type IDeleteQueryParams = any;

export const useDeleteMutation = createMutationHook<string[], ISourceItem<IWireSource>>(DeleteApiLink, "post");

export const toDeleteLink = (queryParams?: IDeleteQueryParams) => toLink(DeleteApiLink, queryParams);
export const useDeleteLink = () => toDeleteLink;

export const useDeletePromise = createPromiseHook<string[], ISourceItem<IWireSource>>(DeleteApiLink, "post");

export const DeletePromise = createPromise<string[], ISourceItem<IWireSource>>(DeleteApiLink, "post");
