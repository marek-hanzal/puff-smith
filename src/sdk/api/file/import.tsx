/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IImportJob, IImportJobParams} from "@/puff-smith/jobs/import/interface";
import {createMutationHook, createPromise, createPromiseHook, Form, IFormProps, toLink} from "@leight-core/client";
import {FC} from "react";

export const ImportApiLink = "/api/file/import";

export type IImportQueryParams = any;

export const useImportMutation = createMutationHook<IImportJobParams, IImportJob>(ImportApiLink, "post");

export interface IImportDefaultFormProps extends Partial<IFormProps<IImportJobParams, IImportJob>> {
}

export const ImportDefaultForm: FC<IImportDefaultFormProps> = props => <Form<IImportJobParams, IImportJob>
	useMutation={useImportMutation}
	{...props}
/>

export const toImportLink = (queryParams?: IImportQueryParams) => toLink(ImportApiLink, queryParams);
export const useImportLink = () => toImportLink;

export const useImportPromise = createPromiseHook<IImportJobParams, IImportJob>(ImportApiLink, "post");
export const createImportPromise = createPromise<IImportJobParams, IImportJob>(ImportApiLink, "post");
