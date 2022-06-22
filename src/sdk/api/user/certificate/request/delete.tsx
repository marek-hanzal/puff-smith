/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IUserCertificateRequestSource} from "@/puff-smith/service/user/certificate/request/interface";
import {ISourceItem} from "@leight-core/api";
import {createMutationHook, createPromise, createPromiseHook, toLink} from "@leight-core/client";

export const DeleteApiLink = "/api/user/certificate/request/delete";

export type IDeleteQueryParams = any;

export const useDeleteMutation = createMutationHook<string[], ISourceItem<IUserCertificateRequestSource>>(DeleteApiLink, "post");

export const toDeleteLink = (queryParams?: IDeleteQueryParams) => toLink(DeleteApiLink, queryParams);
export const useDeleteLink = () => toDeleteLink;

export const useDeletePromise = createPromiseHook<string[], ISourceItem<IUserCertificateRequestSource>>(DeleteApiLink, "post");

export const DeletePromise = createPromise<string[], ISourceItem<IUserCertificateRequestSource>>(DeleteApiLink, "post");
