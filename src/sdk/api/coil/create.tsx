/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {ICoilSource} from "@/puff-smith/service/coil/interface";
import {ISourceCreate, ISourceItem} from "@leight-core/api";
import {createMutationHook, createPromise, createPromiseHook, Form, IFormProps, toLink} from "@leight-core/client";
import {FC} from "react";

export const CreateApiLink = "/api/coil/create";

export type ICreateQueryParams = any;

export const useCreateMutation = createMutationHook<ISourceCreate<ICoilSource>, ISourceItem<ICoilSource>>(CreateApiLink, "post");

export interface ICreateDefaultFormProps extends Partial<IFormProps<ISourceCreate<ICoilSource>, ISourceItem<ICoilSource>>> {
}

export const CreateDefaultForm: FC<ICreateDefaultFormProps> = props => <Form<ISourceCreate<ICoilSource>, ISourceItem<ICoilSource>>
	useMutation={useCreateMutation}
	{...props}
/>

export const toCreateLink = (queryParams?: ICreateQueryParams) => toLink(CreateApiLink, queryParams);
export const useCreateLink = () => toCreateLink;

export const useCreatePromise = createPromiseHook<ISourceCreate<ICoilSource>, ISourceItem<ICoilSource>>(CreateApiLink, "post");

export const CreatePromise = createPromise<ISourceCreate<ICoilSource>, ISourceItem<ICoilSource>>(CreateApiLink, "post");
