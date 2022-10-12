import {ContainerPromise} from "@/puff-smith/service/Container";
import {RecipeSource}     from "@/puff-smith/service/recipe/RecipeSource";
import {PatchEndpoint}    from "@leight-core/server";

export default PatchEndpoint({
	name:      "RecipePatch",
	container: ContainerPromise,
	source:    RecipeSource,
});
