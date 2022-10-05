import {RecipeIcon}            from "@/puff-smith/component/icon/RecipeIcon";
import {DEFAULT_LIST_SIZE}     from "@/puff-smith/component/misc";
import {MobileLabPage}         from "@/puff-smith/site/lab/@module/component/MobileLabPage";
import {withLabLayout}         from "@/puff-smith/site/lab/@module/layout/layout";
import {RecipeList}            from "@/puff-smith/ui/recipe/list/RecipeList";
import {RecipeListNothing}     from "@/puff-smith/ui/recipe/list/RecipeListNothing";
import {RecipeIndexBubble}     from "@/puff-smith/ui/recipe/menu/RecipeIndexBubble";
import {RecipeProviderControl} from "@/sdk/api/recipe/query";

export default withLabLayout(function Index() {
	return <MobileLabPage
		title={"lab.recipe.index"}
		icon={<RecipeIcon/>}
		onBack={navigate => navigate("/lab")}
	>
		<RecipeIndexBubble/>
		<RecipeProviderControl
			defaultSize={DEFAULT_LIST_SIZE}
		>
			<RecipeList
				renderNothing={() => <RecipeListNothing/>}
			/>
		</RecipeProviderControl>
	</MobileLabPage>;
});
