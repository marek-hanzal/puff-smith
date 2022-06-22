/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {ITokenSource} from "@/puff-smith/service/token/interface";
import {ISourceCreate, ISourceItem} from "@leight-core/api";
import {createMutationHook, createPromise, createPromiseHook, Form, IFormProps, toLink} from "@leight-core/client";
import {FC} from "react";

export const CreateApiLink = "/api/token/create";

export type ICreateQueryParams = any;

export const useCreateMutation = createMutationHook<ISourceCreate<ITokenSource>, ISourceItem<ITokenSource>>(CreateApiLink, "post");

export interface ICreateDefaultFormProps extends Partial<IFormProps<ISourceCreate<ITokenSource>, ISourceItem<ITokenSource>>> {
}

export const CreateDefaultForm: FC<ICreateDefaultFormProps> = props => <Form<ISourceCreate<ITokenSource>, ISourceItem<ITokenSource>>
	useMutation={useCreateMutation}
	{...props}
/>

export const toCreateLink = (queryParams?: ICreateQueryParams) => toLink(CreateApiLink, queryParams);
export const useCreateLink = () => toCreateLink;

export const useCreatePromise = createPromiseHook<ISourceCreate<ITokenSource>, ISourceItem<ITokenSource>>(CreateApiLink, "post");

export const CreatePromise = createPromise<ISourceCreate<ITokenSource>, ISourceItem<ITokenSource>>(CreateApiLink, "post");
