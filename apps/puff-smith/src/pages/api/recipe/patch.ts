import {asyncContainer} from "@/puff-smith/service/Container";
import {RecipeSource}   from "@/puff-smith/service/recipe/RecipeSource";
import {PatchEndpoint}  from "@leight-core/viv";

export default PatchEndpoint({
	name:      "RecipePatch",
	container: asyncContainer,
	source:    RecipeSource,
});
