/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IBuildLiquidRatingSource} from "@/puff-smith/service/build/liquid/rating/interface";
import {ISourceCreate, ISourceItem} from "@leight-core/api";
import {createMutationHook, createPromise, createPromiseHook, Form, IFormProps, toLink} from "@leight-core/client";
import {FC} from "react";
import {useQueryClient} from "react-query";

export const CreateApiLink = "/api/lab/build/rating/create";

export type ICreateQueryParams = any;

export const useCreateMutation = createMutationHook<ISourceCreate<IBuildLiquidRatingSource>, ISourceItem<IBuildLiquidRatingSource>>(CreateApiLink, "post");

export const useCreateQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([CreateApiLink]);
}

export interface ICreateDefaultFormProps extends Partial<IFormProps<ISourceCreate<IBuildLiquidRatingSource>, ISourceItem<IBuildLiquidRatingSource>>> {
}

export const CreateDefaultForm: FC<ICreateDefaultFormProps> = props => <Form<ISourceCreate<IBuildLiquidRatingSource>, ISourceItem<IBuildLiquidRatingSource>>
	useMutation={useCreateMutation}
	{...props}
/>

export const toCreateLink = (queryParams?: ICreateQueryParams) => toLink(CreateApiLink, queryParams);
export const useCreateLink = () => toCreateLink;

export const useCreatePromise = createPromiseHook<ISourceCreate<IBuildLiquidRatingSource>, ISourceItem<IBuildLiquidRatingSource>>(CreateApiLink, "post");

export const CreatePromise = createPromise<ISourceCreate<IBuildLiquidRatingSource>, ISourceItem<IBuildLiquidRatingSource>>(CreateApiLink, "post");
