/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IBoosterSource} from "@/puff-smith/service/booster/interface";
import {ISourceCreate, ISourceItem} from "@leight-core/api";
import {createMutationHook, createPromise, createPromiseHook, Form, IFormProps, toLink} from "@leight-core/client";
import {FC} from "react";
import {useQueryClient} from "react-query";

export const CreateApiLink = "/api/booster/create";

export type ICreateQueryParams = any;

export const useCreateMutation = createMutationHook<ISourceCreate<IBoosterSource>, ISourceItem<IBoosterSource>>(CreateApiLink, "post");

export const useCreateQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([CreateApiLink]);
}

export interface ICreateDefaultFormProps extends Partial<IFormProps<ISourceCreate<IBoosterSource>, ISourceItem<IBoosterSource>>> {
}

export const CreateDefaultForm: FC<ICreateDefaultFormProps> = props => <Form<ISourceCreate<IBoosterSource>, ISourceItem<IBoosterSource>>
	useMutation={useCreateMutation}
	{...props}
/>

export const toCreateLink = (queryParams?: ICreateQueryParams) => toLink(CreateApiLink, queryParams);
export const useCreateLink = () => toCreateLink;

export const useCreatePromise = createPromiseHook<ISourceCreate<IBoosterSource>, ISourceItem<IBoosterSource>>(CreateApiLink, "post");

export const CreatePromise = createPromise<ISourceCreate<IBoosterSource>, ISourceItem<IBoosterSource>>(CreateApiLink, "post");
