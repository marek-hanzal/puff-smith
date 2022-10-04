/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IRecipeSource} from "@/puff-smith/service/recipe/interface";
import {ISourceItem, ISourcePatch} from "@leight-core/api";
import {createMutationHook, createPromise, createPromiseHook, Form, IFormProps, IMobileFormProps, MobileForm, toLink} from "@leight-core/client";
import {FC} from "react";

export const RecipePatchApiLink = "/api/recipe/patch";

export type IRecipePatchQueryParams = any;

export const useRecipePatchMutation = createMutationHook<ISourcePatch<IRecipeSource>, ISourceItem<IRecipeSource>>(RecipePatchApiLink, "post");

export interface IRecipePatchDefaultFormProps extends Partial<IFormProps<ISourcePatch<IRecipeSource>, ISourceItem<IRecipeSource>>> {
}

export const RecipePatchDefaultForm: FC<IRecipePatchDefaultFormProps> = props => <Form<ISourcePatch<IRecipeSource>, ISourceItem<IRecipeSource>>
	useMutation={useRecipePatchMutation}
	translation={RecipePatchApiLink}
	{...props}
/>

export interface IRecipePatchDefaultMobileFormProps extends Partial<IMobileFormProps<ISourcePatch<IRecipeSource>, ISourceItem<IRecipeSource>>> {
}

export const RecipePatchDefaultMobileForm: FC<IRecipePatchDefaultMobileFormProps> = props => <MobileForm<ISourcePatch<IRecipeSource>, ISourceItem<IRecipeSource>>
	useMutation={useRecipePatchMutation}
	translation={RecipePatchApiLink}
	{...props}
/>

export const toRecipePatchLink = (queryParams?: IRecipePatchQueryParams) => toLink(RecipePatchApiLink, queryParams);
export const useRecipePatchLink = () => toRecipePatchLink;

export const useRecipePatchPromise = createPromiseHook<ISourcePatch<IRecipeSource>, ISourceItem<IRecipeSource>>(RecipePatchApiLink, "post");

export const RecipePatchPromise = createPromise<ISourcePatch<IRecipeSource>, ISourceItem<IRecipeSource>>(RecipePatchApiLink, "post");
