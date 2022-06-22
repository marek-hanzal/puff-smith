/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IModSource} from "@/puff-smith/service/mod/interface";
import {ISourceCreate, ISourceItem} from "@leight-core/api";
import {createMutationHook, createPromise, createPromiseHook, Form, IFormProps, toLink} from "@leight-core/client";
import {FC} from "react";

export const CreateApiLink = "/api/mod/create";

export type ICreateQueryParams = any;

export const useCreateMutation = createMutationHook<ISourceCreate<IModSource>, ISourceItem<IModSource>>(CreateApiLink, "post");

export interface ICreateDefaultFormProps extends Partial<IFormProps<ISourceCreate<IModSource>, ISourceItem<IModSource>>> {
}

export const CreateDefaultForm: FC<ICreateDefaultFormProps> = props => <Form<ISourceCreate<IModSource>, ISourceItem<IModSource>>
	useMutation={useCreateMutation}
	{...props}
/>

export const toCreateLink = (queryParams?: ICreateQueryParams) => toLink(CreateApiLink, queryParams);
export const useCreateLink = () => toCreateLink;

export const useCreatePromise = createPromiseHook<ISourceCreate<IModSource>, ISourceItem<IModSource>>(CreateApiLink, "post");

export const CreatePromise = createPromise<ISourceCreate<IModSource>, ISourceItem<IModSource>>(CreateApiLink, "post");
