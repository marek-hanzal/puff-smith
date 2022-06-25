/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IAromaCommentSource} from "@/puff-smith/service/aroma/comment/interface";
import {ISourceCreate, ISourceItem} from "@leight-core/api";
import {createMutationHook, createPromise, createPromiseHook, Form, IFormProps, toLink} from "@leight-core/client";
import {FC} from "react";

export const CreateApiLink = "/api/aroma/comment/create";

export type ICreateQueryParams = any;

export const useCreateMutation = createMutationHook<ISourceCreate<IAromaCommentSource>, ISourceItem<IAromaCommentSource>>(CreateApiLink, "post");

export interface ICreateDefaultFormProps extends Partial<IFormProps<ISourceCreate<IAromaCommentSource>, ISourceItem<IAromaCommentSource>>> {
}

export const CreateDefaultForm: FC<ICreateDefaultFormProps> = props => <Form<ISourceCreate<IAromaCommentSource>, ISourceItem<IAromaCommentSource>>
	useMutation={useCreateMutation}
	{...props}
/>;

export const toCreateLink = (queryParams?: ICreateQueryParams) => toLink(CreateApiLink, queryParams);
export const useCreateLink = () => toCreateLink;

export const useCreatePromise = createPromiseHook<ISourceCreate<IAromaCommentSource>, ISourceItem<IAromaCommentSource>>(CreateApiLink, "post");

export const CreatePromise = createPromise<ISourceCreate<IAromaCommentSource>, ISourceItem<IAromaCommentSource>>(CreateApiLink, "post");
