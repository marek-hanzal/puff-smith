/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {ICommentSource} from "@/puff-smith/service/comment/interface";
import {ISourceCreate, ISourceItem} from "@leight-core/api";
import {createMutationHook, createPromise, createPromiseHook, Form, IFormProps, toLink} from "@leight-core/client";
import {FC} from "react";
import {useQueryClient} from "react-query";

export const CreateApiLink = "/api/comment/create";

export type ICreateQueryParams = any;

export const useCreateMutation = createMutationHook<ISourceCreate<ICommentSource>, ISourceItem<ICommentSource>>(CreateApiLink, "post");

export const useCreateQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([CreateApiLink]);
};

export interface ICreateDefaultFormProps extends Partial<IFormProps<ISourceCreate<ICommentSource>, ISourceItem<ICommentSource>>> {
}

export const CreateDefaultForm: FC<ICreateDefaultFormProps> = props => <Form<ISourceCreate<ICommentSource>, ISourceItem<ICommentSource>>
	useMutation={useCreateMutation}
	{...props}
/>;

export const toCreateLink = (queryParams?: ICreateQueryParams) => toLink(CreateApiLink, queryParams);
export const useCreateLink = () => toCreateLink;

export const useCreatePromise = createPromiseHook<ISourceCreate<ICommentSource>, ISourceItem<ICommentSource>>(CreateApiLink, "post");

export const CreatePromise = createPromise<ISourceCreate<ICommentSource>, ISourceItem<ICommentSource>>(CreateApiLink, "post");
