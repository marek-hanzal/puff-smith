/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IAtomizerCommentSource} from "@/puff-smith/service/atomizer/comment/interface";
import {ISourceCreate, ISourceItem} from "@leight-core/api";
import {createMutationHook, createPromise, createPromiseHook, Form, IFormProps, toLink} from "@leight-core/client";
import {FC} from "react";

export const CreateApiLink = "/api/atomizer/comment/create";

export type ICreateQueryParams = any;

export const useCreateMutation = createMutationHook<ISourceCreate<IAtomizerCommentSource>, ISourceItem<IAtomizerCommentSource>>(CreateApiLink, "post");

export interface ICreateDefaultFormProps extends Partial<IFormProps<ISourceCreate<IAtomizerCommentSource>, ISourceItem<IAtomizerCommentSource>>> {
}

export const CreateDefaultForm: FC<ICreateDefaultFormProps> = props => <Form<ISourceCreate<IAtomizerCommentSource>, ISourceItem<IAtomizerCommentSource>>
	useMutation={useCreateMutation}
	{...props}
/>

export const toCreateLink = (queryParams?: ICreateQueryParams) => toLink(CreateApiLink, queryParams);
export const useCreateLink = () => toCreateLink;

export const useCreatePromise = createPromiseHook<ISourceCreate<IAtomizerCommentSource>, ISourceItem<IAtomizerCommentSource>>(CreateApiLink, "post");

export const CreatePromise = createPromise<ISourceCreate<IAtomizerCommentSource>, ISourceItem<IAtomizerCommentSource>>(CreateApiLink, "post");
