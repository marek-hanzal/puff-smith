/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IRecipeSource} from "@/puff-smith/service/recipe/interface";
import {
	ISourceCreate,
	ISourceItem
}                      from "@leight-core/api";
import {
	createMutationHook,
	createPromise,
	createPromiseHook,
	Form,
	IFormProps,
	IMobileFormProps,
	MobileForm,
	toLink
}                      from "@leight-core/client";
import {FC}            from "react";

export const RecipeCreateApiLink = "/api/recipe/create";

export type IRecipeCreateQueryParams = any;

export const useRecipeCreateMutation = createMutationHook<ISourceCreate<IRecipeSource>, ISourceItem<IRecipeSource>>(RecipeCreateApiLink, "post");

export interface IRecipeCreateDefaultFormProps extends Partial<IFormProps<ISourceCreate<IRecipeSource>, ISourceItem<IRecipeSource>>> {
}

export const RecipeCreateDefaultForm: FC<IRecipeCreateDefaultFormProps> = props => <Form<ISourceCreate<IRecipeSource>, ISourceItem<IRecipeSource>>
	useMutation={useRecipeCreateMutation}
	translation={RecipeCreateApiLink}
	{...props}
/>

export interface IRecipeCreateDefaultMobileFormProps extends Partial<IMobileFormProps<ISourceCreate<IRecipeSource>, ISourceItem<IRecipeSource>>> {
}

export const RecipeCreateDefaultMobileForm: FC<IRecipeCreateDefaultMobileFormProps> = props => <MobileForm<ISourceCreate<IRecipeSource>, ISourceItem<IRecipeSource>>
	useMutation={useRecipeCreateMutation}
	translation={RecipeCreateApiLink}
	{...props}
/>

export const toRecipeCreateLink = (queryParams?: IRecipeCreateQueryParams) => toLink(RecipeCreateApiLink, queryParams);
export const useRecipeCreateLink = () => toRecipeCreateLink;

export const useRecipeCreatePromise = createPromiseHook<ISourceCreate<IRecipeSource>, ISourceItem<IRecipeSource>>(RecipeCreateApiLink, "post");

export const RecipeCreatePromise = createPromise<ISourceCreate<IRecipeSource>, ISourceItem<IRecipeSource>>(RecipeCreateApiLink, "post");
