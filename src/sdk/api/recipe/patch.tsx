/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IRecipeSource} from "@/puff-smith/service/recipe/interface";
import {SourceInfer}   from "@leight-core/api";
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

export const RecipePatchApiLink = "/api/recipe/patch";

export type IRecipePatchQueryParams = any;

export const useRecipePatchMutation = createMutationHook<SourceInfer.Patch<IRecipeSource>, SourceInfer.Item<IRecipeSource>>(RecipePatchApiLink, "post");

export interface IRecipePatchDefaultFormProps extends Partial<IFormProps<SourceInfer.Patch<IRecipeSource>, SourceInfer.Item<IRecipeSource>>> {
}

export const RecipePatchDefaultForm: FC<IRecipePatchDefaultFormProps> = props => <Form<SourceInfer.Patch<IRecipeSource>, SourceInfer.Item<IRecipeSource>>
	useMutation={useRecipePatchMutation}
	translation={RecipePatchApiLink}
	{...props}
/>;

export interface IRecipePatchDefaultMobileFormProps extends Partial<IMobileFormProps<SourceInfer.Patch<IRecipeSource>, SourceInfer.Item<IRecipeSource>>> {
}

export const RecipePatchDefaultMobileForm: FC<IRecipePatchDefaultMobileFormProps> = props => <MobileForm<SourceInfer.Patch<IRecipeSource>, SourceInfer.Item<IRecipeSource>>
	useMutation={useRecipePatchMutation}
	translation={RecipePatchApiLink}
	{...props}
/>;

export const toRecipePatchLink = (queryParams?: IRecipePatchQueryParams) => toLink(RecipePatchApiLink, queryParams);
export const useRecipePatchLink = () => toRecipePatchLink;

export const useRecipePatchPromise = createPromiseHook<SourceInfer.Patch<IRecipeSource>, SourceInfer.Item<IRecipeSource>>(RecipePatchApiLink, "post");

export const RecipePatchPromise = createPromise<SourceInfer.Patch<IRecipeSource>, SourceInfer.Item<IRecipeSource>>(RecipePatchApiLink, "post");
