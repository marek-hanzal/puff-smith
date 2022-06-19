/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IBuildCommentSource} from "@/puff-smith/service/build/comment/interface";
import {ISourceCreate, ISourceItem} from "@leight-core/api";
import {createMutationHook, createPromise, createPromiseHook, Form, IFormProps, toLink} from "@leight-core/client";
import {FC} from "react";
import {useQueryClient} from "react-query";

export const CreateApiLink = "/api/lab/build/comment/create";

export type ICreateQueryParams = any;

export const useCreateMutation = createMutationHook<ISourceCreate<IBuildCommentSource>, ISourceItem<IBuildCommentSource>>(CreateApiLink, "post");

export const useCreateQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([CreateApiLink]);
};

export interface ICreateDefaultFormProps extends Partial<IFormProps<ISourceCreate<IBuildCommentSource>, ISourceItem<IBuildCommentSource>>> {
}

export const CreateDefaultForm: FC<ICreateDefaultFormProps> = props => <Form<ISourceCreate<IBuildCommentSource>, ISourceItem<IBuildCommentSource>>
	useMutation={useCreateMutation}
	{...props}
/>;

export const toCreateLink = (queryParams?: ICreateQueryParams) => toLink(CreateApiLink, queryParams);
export const useCreateLink = () => toCreateLink;

export const useCreatePromise = createPromiseHook<ISourceCreate<IBuildCommentSource>, ISourceItem<IBuildCommentSource>>(CreateApiLink, "post");

export const CreatePromise = createPromise<ISourceCreate<IBuildCommentSource>, ISourceItem<IBuildCommentSource>>(CreateApiLink, "post");
