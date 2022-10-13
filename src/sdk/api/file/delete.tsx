/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IFileSource} from "@/puff-smith/service/file/interface";
import {
	createMutationHook,
	createPromise,
	createPromiseHook,
	SourceInfer,
	toLink
}                    from "@leight-core/viv";

export const FileDeleteApiLink = "/api/file/delete";

export type IFileDeleteQueryParams = any;

export const useFileDeleteMutation = createMutationHook<string[], SourceInfer.Item<IFileSource>, IFileDeleteQueryParams>(FileDeleteApiLink, "post");

export const toFileDeleteLink  = (queryParams?: IFileDeleteQueryParams) => toLink(FileDeleteApiLink, queryParams);
export const useFileDeleteLink = () => toFileDeleteLink;

export const useFileDeletePromise = createPromiseHook<string[], SourceInfer.Item<IFileSource>, IFileDeleteQueryParams>(FileDeleteApiLink, "post");

export const FileDeletePromise = createPromise<string[], SourceInfer.Item<IFileSource>, IFileDeleteQueryParams>(FileDeleteApiLink, "post");
