import {
	IBase,
	IWithBase
}                       from "@/puff-smith/service/base/interface";
import {
	IBooster,
	IBoosterCreate,
	IWithBooster
}                       from "@/puff-smith/service/booster/interface";
import {ContainerClass} from "@/puff-smith/service/Container";
import {
	IQuery,
	ISource,
	IWithFulltext,
	Nullable
}                       from "@leight-core/viv";
import {
	Prisma,
	Recipe
}                       from "@prisma/client";

export type IRecipeEntity =
	Recipe
	& Nullable<IWithBooster>
	& Nullable<IWithBase>;

export interface IRecipe extends Omit<Recipe, "userId" | "nicotine" | "nicotineTolerance"> {
	base: IBase | null;
	booster: IBooster | null;
	nicotine?: number;
	nicotineTolerance?: number;
}

export interface IWithRecipe {
	recipe: IRecipe;
}

export interface IRecipeCreate extends Omit<Recipe, "id" | "userId" | "boosterId" | "baseId" | "hash"> {
	base?: IBoosterCreate;
	booster?: IBoosterCreate;
}

export type IRecipeQuery = IQuery<Prisma.RecipeWhereInput & IWithFulltext, Prisma.RecipeOrderByWithRelationInput>;

export interface IRecipeSource extends ISource<//
	ContainerClass,
	IRecipeEntity,
	IRecipe,
	IRecipeQuery,
	IRecipeCreate> {
}
