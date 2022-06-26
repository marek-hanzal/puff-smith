/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IAtomizerInventoryCommentSource} from "@/puff-smith/service/atomizer/inventory/comment/interface";
import {ISourceCreate, ISourceItem} from "@leight-core/api";
import {createMutationHook, createPromise, createPromiseHook, Form, IFormProps, toLink} from "@leight-core/client";
import {FC} from "react";

export const CreateApiLink = "/api/inventory/atomizer/comment/create";

export type ICreateQueryParams = any;

export const useCreateMutation = createMutationHook<ISourceCreate<IAtomizerInventoryCommentSource>, ISourceItem<IAtomizerInventoryCommentSource>>(CreateApiLink, "post");

export interface ICreateDefaultFormProps extends Partial<IFormProps<ISourceCreate<IAtomizerInventoryCommentSource>, ISourceItem<IAtomizerInventoryCommentSource>>> {
}

export const CreateDefaultForm: FC<ICreateDefaultFormProps> = props => <Form<ISourceCreate<IAtomizerInventoryCommentSource>, ISourceItem<IAtomizerInventoryCommentSource>>
	useMutation={useCreateMutation}
	{...props}
/>;

export const toCreateLink = (queryParams?: ICreateQueryParams) => toLink(CreateApiLink, queryParams);
export const useCreateLink = () => toCreateLink;

export const useCreatePromise = createPromiseHook<ISourceCreate<IAtomizerInventoryCommentSource>, ISourceItem<IAtomizerInventoryCommentSource>>(CreateApiLink, "post");

export const CreatePromise = createPromise<ISourceCreate<IAtomizerInventoryCommentSource>, ISourceItem<IAtomizerInventoryCommentSource>>(CreateApiLink, "post");
