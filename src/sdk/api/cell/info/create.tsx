/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {ICellInfoSource} from "@/puff-smith/service/cell/info/interface";
import {ISourceCreate, ISourceItem} from "@leight-core/api";
import {createMutationHook, createPromise, createPromiseHook, Form, IFormProps, toLink} from "@leight-core/client";
import {FC} from "react";

export const CreateApiLink = "/api/cell/info/create";

export type ICreateQueryParams = any;

export const useCreateMutation = createMutationHook<ISourceCreate<ICellInfoSource>, ISourceItem<ICellInfoSource>>(CreateApiLink, "post");

export interface ICreateDefaultFormProps extends Partial<IFormProps<ISourceCreate<ICellInfoSource>, ISourceItem<ICellInfoSource>>> {
}

export const CreateDefaultForm: FC<ICreateDefaultFormProps> = props => <Form<ISourceCreate<ICellInfoSource>, ISourceItem<ICellInfoSource>>
	useMutation={useCreateMutation}
	{...props}
/>;

export const toCreateLink = (queryParams?: ICreateQueryParams) => toLink(CreateApiLink, queryParams);
export const useCreateLink = () => toCreateLink;

export const useCreatePromise = createPromiseHook<ISourceCreate<ICellInfoSource>, ISourceItem<ICellInfoSource>>(CreateApiLink, "post");

export const CreatePromise = createPromise<ISourceCreate<ICellInfoSource>, ISourceItem<ICellInfoSource>>(CreateApiLink, "post");
