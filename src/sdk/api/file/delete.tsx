/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IFileSource} from "@/puff-smith/service/file/interface";
import {ISourceItem} from "@leight-core/api";
import {
	createMutationHook,
	createPromise,
	createPromiseHook,
	toLink
}                    from "@leight-core/client";

export const FileDeleteApiLink = "/api/file/delete";

export type IFileDeleteQueryParams = any;

export const useFileDeleteMutation = createMutationHook<string[], ISourceItem<IFileSource>, IFileDeleteQueryParams>(FileDeleteApiLink, "post");

export const toFileDeleteLink = (queryParams?: IFileDeleteQueryParams) => toLink(FileDeleteApiLink, queryParams);
export const useFileDeleteLink = () => toFileDeleteLink;

export const useFileDeletePromise = createPromiseHook<string[], ISourceItem<IFileSource>, IFileDeleteQueryParams>(FileDeleteApiLink, "post");

export const FileDeletePromise = createPromise<string[], ISourceItem<IFileSource>, IFileDeleteQueryParams>(FileDeleteApiLink, "post");
