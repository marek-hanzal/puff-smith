import {IRecipeSource} from "@/puff-smith/service/recipe/interface";
import {RecipeSource} from "@/puff-smith/service/recipe/RecipeSource";
import {CreateEndpoint} from "@leight-core/server";

export default CreateEndpoint<"RecipeCreate", IRecipeSource>({
	source: RecipeSource,
});
