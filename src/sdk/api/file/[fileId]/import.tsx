/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IImportParams, ImportJobName} from "@/puff-smith/agenda/job/import";
import {JobService} from "@/puff-smith/service/job/JobService";
import {IJob, IQueryParams} from "@leight-core/api";
import {MutationEndpoint} from "@leight-core/server";
import {FC} from "react";
import {useQueryClient} from "react-query";
import {Form, IFormProps, ISourceProviderProps, createMutationHook, createPromise, createPromiseHook, createQueryHook, toLink, useSourceContext} from "@leight-core/client";

export const ImportApiLink = "/api/file/[fileId]/import";

export type IImportQueryParams = IImportParams;

export const useImportMutation = createMutationHook<void, IJob<IImportParams>, IImportParams>(ImportApiLink, "post");

export const useImportQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([ImportApiLink]);
}

export interface IImportDefaultFormProps extends Partial<IFormProps<void, IJob<IImportParams>, IImportParams>> {
}

export const ImportDefaultForm: FC<IImportDefaultFormProps> = props => <Form<void, IJob<IImportParams>, IImportParams>
	useMutation={useImportMutation}
	{...props}
/>

export const toImportLink = (queryParams?: IImportQueryParams) => toLink(ImportApiLink, queryParams);
export const useImportLink = () => toImportLink;

export const useImportPromise = createPromiseHook<void, IJob<IImportParams>, IImportParams>(ImportApiLink, "post");

export const ImportPromise = createPromise<void, IJob<IImportParams>, IImportParams>(ImportApiLink, "post");
