import {ContainerPromise} from "@/puff-smith/service/Container";
import {RecipeSource}     from "@/puff-smith/service/recipe/RecipeSource";
import {CountEndpoint}    from "@leight-core/server";

export default CountEndpoint({
	name:      "RecipeCount",
	container: ContainerPromise,
	source:    RecipeSource,
});
