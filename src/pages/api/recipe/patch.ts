import {IRecipeSource} from "@/puff-smith/service/recipe/interface";
import {RecipeSource}  from "@/puff-smith/service/recipe/RecipeSource";
import {PatchEndpoint} from "@leight-core/server";

export default PatchEndpoint<"RecipePatch", IRecipeSource>({
	source: RecipeSource,
});
