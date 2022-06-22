/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {ITagSource} from "@/puff-smith/service/tag/interface";
import {ISourceCreate, ISourceItem} from "@leight-core/api";
import {createMutationHook, createPromise, createPromiseHook, Form, IFormProps, toLink} from "@leight-core/client";
import {FC} from "react";

export const CreateApiLink = "/api/tag/create";

export type ICreateQueryParams = any;

export const useCreateMutation = createMutationHook<ISourceCreate<ITagSource>, ISourceItem<ITagSource>>(CreateApiLink, "post");

export interface ICreateDefaultFormProps extends Partial<IFormProps<ISourceCreate<ITagSource>, ISourceItem<ITagSource>>> {
}

export const CreateDefaultForm: FC<ICreateDefaultFormProps> = props => <Form<ISourceCreate<ITagSource>, ISourceItem<ITagSource>>
	useMutation={useCreateMutation}
	{...props}
/>

export const toCreateLink = (queryParams?: ICreateQueryParams) => toLink(CreateApiLink, queryParams);
export const useCreateLink = () => toCreateLink;

export const useCreatePromise = createPromiseHook<ISourceCreate<ITagSource>, ISourceItem<ITagSource>>(CreateApiLink, "post");

export const CreatePromise = createPromise<ISourceCreate<ITagSource>, ISourceItem<ITagSource>>(CreateApiLink, "post");
