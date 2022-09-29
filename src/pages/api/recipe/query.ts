import {IRecipeSource} from "@/puff-smith/service/recipe/interface";
import {RecipeSource} from "@/puff-smith/service/recipe/RecipeSource";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"Recipe", IRecipeSource>({
	source: RecipeSource,
});
