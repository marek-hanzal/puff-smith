import {IRecipeSource} from "@/puff-smith/service/recipe/interface";
import {RecipeSource} from "@/puff-smith/service/recipe/RecipeSource";
import {CountEndpoint} from "@leight-core/server";

export default CountEndpoint<"RecipeCount", IRecipeSource>({
	source: RecipeSource,
});
