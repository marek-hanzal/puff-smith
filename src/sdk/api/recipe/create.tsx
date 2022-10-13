/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IRecipeSource} from "@/puff-smith/service/recipe/interface";
import {
	createMutationHook,
	createPromise,
	createPromiseHook,
	Form,
	IFormProps,
	IMobileFormProps,
	MobileForm,
	SourceInfer,
	toLink
}                      from "@leight-core/viv";
import {FC}            from "react";

export const RecipeCreateApiLink = "/api/recipe/create";

export type IRecipeCreateQueryParams = any;

export const useRecipeCreateMutation = createMutationHook<SourceInfer.Create<IRecipeSource>, SourceInfer.Item<IRecipeSource>>(RecipeCreateApiLink, "post");

export interface IRecipeCreateDefaultFormProps extends Partial<IFormProps<SourceInfer.Create<IRecipeSource>, SourceInfer.Item<IRecipeSource>>> {
}

export const RecipeCreateDefaultForm: FC<IRecipeCreateDefaultFormProps> = props => <Form<SourceInfer.Create<IRecipeSource>, SourceInfer.Item<IRecipeSource>>
	useMutation={useRecipeCreateMutation}
	translation={RecipeCreateApiLink}
	{...props}
/>;

export interface IRecipeCreateDefaultMobileFormProps extends Partial<IMobileFormProps<SourceInfer.Create<IRecipeSource>, SourceInfer.Item<IRecipeSource>>> {
}

export const RecipeCreateDefaultMobileForm: FC<IRecipeCreateDefaultMobileFormProps> = props => <MobileForm<SourceInfer.Create<IRecipeSource>, SourceInfer.Item<IRecipeSource>>
	useMutation={useRecipeCreateMutation}
	translation={RecipeCreateApiLink}
	{...props}
/>;

export const toRecipeCreateLink  = (queryParams?: IRecipeCreateQueryParams) => toLink(RecipeCreateApiLink, queryParams);
export const useRecipeCreateLink = () => toRecipeCreateLink;

export const useRecipeCreatePromise = createPromiseHook<SourceInfer.Create<IRecipeSource>, SourceInfer.Item<IRecipeSource>>(RecipeCreateApiLink, "post");

export const RecipeCreatePromise = createPromise<SourceInfer.Create<IRecipeSource>, SourceInfer.Item<IRecipeSource>>(RecipeCreateApiLink, "post");
