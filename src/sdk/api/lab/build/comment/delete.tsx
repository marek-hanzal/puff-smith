/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IBuildCommentSource} from "@/puff-smith/service/build/comment/interface";
import {ISourceItem} from "@leight-core/api";
import {createMutationHook, createPromise, createPromiseHook, toLink} from "@leight-core/client";

export const DeleteApiLink = "/api/lab/build/comment/delete";

export type IDeleteQueryParams = any;

export const useDeleteMutation = createMutationHook<string[], ISourceItem<IBuildCommentSource>>(DeleteApiLink, "post");

export const toDeleteLink = (queryParams?: IDeleteQueryParams) => toLink(DeleteApiLink, queryParams);
export const useDeleteLink = () => toDeleteLink;

export const useDeletePromise = createPromiseHook<string[], ISourceItem<IBuildCommentSource>>(DeleteApiLink, "post");

export const DeletePromise = createPromise<string[], ISourceItem<IBuildCommentSource>>(DeleteApiLink, "post");
