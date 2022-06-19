/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IAromaInventoryCommentSource} from "@/puff-smith/service/aroma/inventory/comment/interface";
import {ISourceCreate, ISourceItem} from "@leight-core/api";
import {createMutationHook, createPromise, createPromiseHook, Form, IFormProps, toLink} from "@leight-core/client";
import {FC} from "react";
import {useQueryClient} from "react-query";

export const CreateApiLink = "/api/inventory/aroma/comment/create";

export type ICreateQueryParams = any;

export const useCreateMutation = createMutationHook<ISourceCreate<IAromaInventoryCommentSource>, ISourceItem<IAromaInventoryCommentSource>>(CreateApiLink, "post");

export const useCreateQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([CreateApiLink]);
};

export interface ICreateDefaultFormProps extends Partial<IFormProps<ISourceCreate<IAromaInventoryCommentSource>, ISourceItem<IAromaInventoryCommentSource>>> {
}

export const CreateDefaultForm: FC<ICreateDefaultFormProps> = props => <Form<ISourceCreate<IAromaInventoryCommentSource>, ISourceItem<IAromaInventoryCommentSource>>
	useMutation={useCreateMutation}
	{...props}
/>;

export const toCreateLink = (queryParams?: ICreateQueryParams) => toLink(CreateApiLink, queryParams);
export const useCreateLink = () => toCreateLink;

export const useCreatePromise = createPromiseHook<ISourceCreate<IAromaInventoryCommentSource>, ISourceItem<IAromaInventoryCommentSource>>(CreateApiLink, "post");

export const CreatePromise = createPromise<ISourceCreate<IAromaInventoryCommentSource>, ISourceItem<IAromaInventoryCommentSource>>(CreateApiLink, "post");
