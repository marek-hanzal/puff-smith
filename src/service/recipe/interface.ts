import {IBase, IWithBase} from "@/puff-smith/service/base/interface";
import {IBooster, IBoosterCreate, IWithBooster} from "@/puff-smith/service/booster/interface";
import {IQuery, ISource, IWithFulltext, Nullable} from "@leight-core/api";
import {Prisma, Recipe} from "@prisma/client";
import {ParsedUrlQuery} from "querystring";

export type IRecipeEntity = Recipe & Nullable<IWithBooster> & Nullable<IWithBase>;

export interface IRecipe extends Omit<Recipe, "userId" | "nicotine" | "nicotineTolerance"> {
	base: IBase | null;
	booster: IBooster | null;
	nicotine?: number;
	nicotineTolerance?: number;
}

export interface IRecipeCreate extends Omit<Recipe, "id" | "userId" | "boosterId" | "baseId" | "hash"> {
	base?: IBoosterCreate;
	booster?: IBoosterCreate;
}

export type IRecipeQuery = IQuery<Prisma.RecipeWhereInput & IWithFulltext, Prisma.RecipeOrderByWithRelationInput>;

export interface IRecipeFetch {
	recipe: IRecipe;
}

export interface IRecipeFetchParams extends ParsedUrlQuery {
	recipeId: string;
}

export interface IRecipeSource extends ISource
	<IRecipeCreate,
		IRecipeEntity,
		IRecipe,
		IRecipeQuery,
		IRecipeFetch,
		IRecipeFetchParams> {
}