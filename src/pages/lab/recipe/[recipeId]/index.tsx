import {RecipeIcon}         from "@/puff-smith/component/icon/RecipeIcon";
import {IWithRecipe}        from "@/puff-smith/service/recipe/interface";
import {withRecipeSource}   from "@/puff-smith/service/recipe/RecipeSource";
import {MobileLabPage}      from "@/puff-smith/site/lab/@module/component/MobileLabPage";
import {withLabLayout}      from "@/puff-smith/site/lab/@module/layout/layout";
import {RecipeRecipeBubble} from "@/puff-smith/ui/recipe/menu/RecipeRecipeBubble";
import {RecipeView}         from "@/puff-smith/ui/recipe/view/RecipeView";

export default withLabLayout(function Index({recipe}: IWithRecipe) {
	return <MobileLabPage
		onBack={navigate => navigate("/lab/recipe")}
		title={"lab.recipe.recipe"}
		values={{recipe}}
		menuSelection={[
			"/lab/recipe",
			"/lab/recipe/[recipeId]"
		]}
		icon={<RecipeIcon/>}
	>
		<RecipeRecipeBubble recipe={recipe}/>
		<RecipeView recipe={recipe}/>
	</MobileLabPage>;
});

export const getServerSideProps = withRecipeSource();
