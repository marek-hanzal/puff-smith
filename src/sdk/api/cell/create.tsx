/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {ICellSource} from "@/puff-smith/service/cell/interface";
import {ISourceCreate, ISourceItem} from "@leight-core/api";
import {createMutationHook, createPromise, createPromiseHook, Form, IFormProps, toLink} from "@leight-core/client";
import {FC} from "react";

export const CreateApiLink = "/api/cell/create";

export type ICreateQueryParams = any;

export const useCreateMutation = createMutationHook<ISourceCreate<ICellSource>, ISourceItem<ICellSource>>(CreateApiLink, "post");

export interface ICreateDefaultFormProps extends Partial<IFormProps<ISourceCreate<ICellSource>, ISourceItem<ICellSource>>> {
}

export const CreateDefaultForm: FC<ICreateDefaultFormProps> = props => <Form<ISourceCreate<ICellSource>, ISourceItem<ICellSource>>
	useMutation={useCreateMutation}
	{...props}
/>;

export const toCreateLink = (queryParams?: ICreateQueryParams) => toLink(CreateApiLink, queryParams);
export const useCreateLink = () => toCreateLink;

export const useCreatePromise = createPromiseHook<ISourceCreate<ICellSource>, ISourceItem<ICellSource>>(CreateApiLink, "post");

export const CreatePromise = createPromise<ISourceCreate<ICellSource>, ISourceItem<ICellSource>>(CreateApiLink, "post");
