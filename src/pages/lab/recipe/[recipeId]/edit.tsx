import {RecipeIcon} from "@/puff-smith/component/icon/RecipeIcon";
import {IRecipeFetch} from "@/puff-smith/service/recipe/interface";
import {RecipeSource} from "@/puff-smith/service/recipe/RecipeSource";
import {MobileLabPage} from "@/puff-smith/site/lab/@module/component/MobileLabPage";
import {withLabLayout} from "@/puff-smith/site/lab/@module/layout/layout";
import {RecipePatchForm} from "@/puff-smith/ui/recipe/form/RecipePatchForm";

export default withLabLayout(function Edit({recipe}: IRecipeFetch) {
	return <MobileLabPage
		onBack={navigate => navigate("/lab/recipe/[recipeId]", {recipeId: recipe.id})}
		title={"lab.recipe.edit"}
		values={{recipe}}
		menuSelection={["/lab/recipe", "/lab/recipe/[recipeId]"]}
		icon={<RecipeIcon/>}
	>
		<RecipePatchForm
			recipe={recipe}
			onSuccess={({navigate, response}) => {
				navigate("/lab/recipe/[recipeId]", {recipeId: response.id});
			}}
		/>
	</MobileLabPage>;
});

export const getServerSideProps = RecipeSource().withFetch("recipe", "recipeId");
