/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IRecipeSource} from "@/puff-smith/service/recipe/interface";
import {ISourceItem} from "@leight-core/api";
import {createMutationHook, createPromise, createPromiseHook, toLink} from "@leight-core/client";

export const RecipeDeleteApiLink = "/api/recipe/delete";

export type IRecipeDeleteQueryParams = any;

export const useRecipeDeleteMutation = createMutationHook<string[], ISourceItem<IRecipeSource>, IRecipeDeleteQueryParams>(RecipeDeleteApiLink, "post");

export const toRecipeDeleteLink = (queryParams?: IRecipeDeleteQueryParams) => toLink(RecipeDeleteApiLink, queryParams);
export const useRecipeDeleteLink = () => toRecipeDeleteLink;

export const useRecipeDeletePromise = createPromiseHook<string[], ISourceItem<IRecipeSource>, IRecipeDeleteQueryParams>(RecipeDeleteApiLink, "post");

export const RecipeDeletePromise = createPromise<string[], ISourceItem<IRecipeSource>, IRecipeDeleteQueryParams>(RecipeDeleteApiLink, "post");
