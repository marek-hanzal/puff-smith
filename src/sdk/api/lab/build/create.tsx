/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IBuildSource} from "@/puff-smith/service/build/interface";
import {ISourceCreate, ISourceItem} from "@leight-core/api";
import {createMutationHook, createPromise, createPromiseHook, Form, IFormProps, toLink} from "@leight-core/client";
import {FC} from "react";

export const CreateApiLink = "/api/lab/build/create";

export type ICreateQueryParams = any;

export const useCreateMutation = createMutationHook<ISourceCreate<IBuildSource>, ISourceItem<IBuildSource>>(CreateApiLink, "post");

export interface ICreateDefaultFormProps extends Partial<IFormProps<ISourceCreate<IBuildSource>, ISourceItem<IBuildSource>>> {
}

export const CreateDefaultForm: FC<ICreateDefaultFormProps> = props => <Form<ISourceCreate<IBuildSource>, ISourceItem<IBuildSource>>
	useMutation={useCreateMutation}
	{...props}
/>

export const toCreateLink = (queryParams?: ICreateQueryParams) => toLink(CreateApiLink, queryParams);
export const useCreateLink = () => toCreateLink;

export const useCreatePromise = createPromiseHook<ISourceCreate<IBuildSource>, ISourceItem<IBuildSource>>(CreateApiLink, "post");

export const CreatePromise = createPromise<ISourceCreate<IBuildSource>, ISourceItem<IBuildSource>>(CreateApiLink, "post");
