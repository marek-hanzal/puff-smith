import {asyncContainer} from "@/puff-smith/service/Container";
import {RecipeSource}   from "@/puff-smith/service/recipe/RecipeSource";
import {QueryEndpoint}  from "@leight-core/viv";

export default QueryEndpoint({
	name:      "Recipe",
	container: asyncContainer,
	source:    RecipeSource,
});
