/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IBaseSource} from "@/puff-smith/service/base/interface";
import {ISourceCreate, ISourceItem} from "@leight-core/api";
import {createMutationHook, createPromise, createPromiseHook, Form, IFormProps, toLink} from "@leight-core/client";
import {FC} from "react";

export const CreateApiLink = "/api/base/create";

export type ICreateQueryParams = any;

export const useCreateMutation = createMutationHook<ISourceCreate<IBaseSource>, ISourceItem<IBaseSource>>(CreateApiLink, "post");

export interface ICreateDefaultFormProps extends Partial<IFormProps<ISourceCreate<IBaseSource>, ISourceItem<IBaseSource>>> {
}

export const CreateDefaultForm: FC<ICreateDefaultFormProps> = props => <Form<ISourceCreate<IBaseSource>, ISourceItem<IBaseSource>>
	useMutation={useCreateMutation}
	{...props}
/>

export const toCreateLink = (queryParams?: ICreateQueryParams) => toLink(CreateApiLink, queryParams);
export const useCreateLink = () => toCreateLink;

export const useCreatePromise = createPromiseHook<ISourceCreate<IBaseSource>, ISourceItem<IBaseSource>>(CreateApiLink, "post");

export const CreatePromise = createPromise<ISourceCreate<IBaseSource>, ISourceItem<IBaseSource>>(CreateApiLink, "post");
