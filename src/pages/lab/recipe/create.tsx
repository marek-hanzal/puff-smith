import {RecipeIcon} from "@/puff-smith/component/icon/RecipeIcon";
import {MobileLabPage} from "@/puff-smith/site/lab/@module/component/MobileLabPage";
import {withLabLayout} from "@/puff-smith/site/lab/@module/layout/layout";
import {RecipeCreateForm} from "@/puff-smith/ui/recipe/form/RecipeCreateForm";

export default withLabLayout(function Create() {
	return <MobileLabPage
		title={"lab.recipe.create"}
		icon={<RecipeIcon/>}
		onBack={navigate => navigate("/lab/recipe")}
	>
		<RecipeCreateForm
			onSuccess={({navigate, response}) => {
				navigate("/lab/recipe/[recipeId]", {recipeId: response.id});
			}}
		/>
	</MobileLabPage>;
});
