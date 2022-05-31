/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IAtomizerSource} from "@/puff-smith/service/atomizer/interface";
import {ISourceCreate, ISourceItem} from "@leight-core/api";
import {createMutationHook, createPromise, createPromiseHook, Form, IFormProps, toLink} from "@leight-core/client";
import {FC} from "react";
import {useQueryClient} from "react-query";

export const CreateApiLink = "/api/atomizer/create";

export type ICreateQueryParams = undefined;

export const useCreateMutation = createMutationHook<ISourceCreate<IAtomizerSource>, ISourceItem<IAtomizerSource>>(CreateApiLink, "post");

export const useCreateQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([CreateApiLink]);
}

export interface ICreateDefaultFormProps extends Partial<IFormProps<ISourceCreate<IAtomizerSource>, ISourceItem<IAtomizerSource>>> {
}

export const CreateDefaultForm: FC<ICreateDefaultFormProps> = props => <Form<ISourceCreate<IAtomizerSource>, ISourceItem<IAtomizerSource>>
	useMutation={useCreateMutation}
	{...props}
/>

export const toCreateLink = (queryParams?: ICreateQueryParams) => toLink(CreateApiLink, queryParams);
export const useCreateLink = () => toCreateLink;

export const useCreatePromise = createPromiseHook<ISourceCreate<IAtomizerSource>, ISourceItem<IAtomizerSource>>(CreateApiLink, "post");

export const CreatePromise = createPromise<ISourceCreate<IAtomizerSource>, ISourceItem<IAtomizerSource>>(CreateApiLink, "post");
