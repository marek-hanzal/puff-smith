import {ContainerPromise} from "@/puff-smith/service/Container";
import {RecipeSource}     from "@/puff-smith/service/recipe/RecipeSource";
import {QueryEndpoint}    from "@leight-core/server";

export default QueryEndpoint({
	name:      "Recipe",
	container: ContainerPromise,
	source:    RecipeSource,
});
