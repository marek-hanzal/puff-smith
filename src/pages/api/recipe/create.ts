import {asyncContainer} from "@/puff-smith/service/Container";
import {RecipeSource}   from "@/puff-smith/service/recipe/RecipeSource";
import {CreateEndpoint} from "@leight-core/server";

export default CreateEndpoint({
	name:      "RecipeCreate",
	container: asyncContainer,
	source:    RecipeSource,
});
