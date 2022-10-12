import {ContainerPromise} from "@/puff-smith/service/Container";
import {RecipeSource}     from "@/puff-smith/service/recipe/RecipeSource";
import {DeleteEndpoint}   from "@leight-core/server";

export default DeleteEndpoint({
	name:      "RecipeDelete",
	container: ContainerPromise,
	source:    RecipeSource,
});
