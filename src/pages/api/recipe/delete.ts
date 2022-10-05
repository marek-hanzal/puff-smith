import {IRecipeSource}  from "@/puff-smith/service/recipe/interface";
import {RecipeSource}   from "@/puff-smith/service/recipe/RecipeSource";
import {DeleteEndpoint} from "@leight-core/server";

export default DeleteEndpoint<"RecipeDelete", IRecipeSource>({
	source: RecipeSource,
});
