/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IImportJob} from "@/puff-smith/cli/jobs/import";
import {IJobParams} from "@leight-core/api";
import {createMutationHook, createPromise, createPromiseHook, Form, IFormProps, toLink} from "@leight-core/client";
import {FC} from "react";
import {useQueryClient} from "react-query";

export const ImportApiLink = "/api/file/[fileId]/import";

export type IImportQueryParams = undefined;

export const useImportMutation = createMutationHook<IJobParams<IImportJob>, IImportJob>(ImportApiLink, "post");

export const useImportQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([ImportApiLink]);
}

export interface IImportDefaultFormProps extends Partial<IFormProps<IJobParams<IImportJob>, IImportJob>> {
}

export const ImportDefaultForm: FC<IImportDefaultFormProps> = props => <Form<IJobParams<IImportJob>, IImportJob>
	useMutation={useImportMutation}
	{...props}
/>;

export const toImportLink = (queryParams?: IImportQueryParams) => toLink(ImportApiLink, queryParams);
export const useImportLink = () => toImportLink;

export const useImportPromise = createPromiseHook<IJobParams<IImportJob>, IImportJob>(ImportApiLink, "post");

export const ImportPromise = createPromise<IJobParams<IImportJob>, IImportJob>(ImportApiLink, "post");
