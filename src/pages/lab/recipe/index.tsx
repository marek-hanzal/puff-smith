import {RecipeIcon} from "@/puff-smith/component/icon/RecipeIcon";
import {DEFAULT_LIST_SIZE} from "@/puff-smith/component/misc";
import {MobileLabPage} from "@/puff-smith/site/lab/@module/component/MobileLabPage";
import {withLabLayout} from "@/puff-smith/site/lab/@module/layout/layout";
import {RecipeList} from "@/puff-smith/ui/recipe/list/RecipeList";
import {RecipeProviderControl} from "@/sdk/api/recipe/query";
import {BubbleMenu} from "@leight-core/client";

export default withLabLayout(function Index() {
	return <MobileLabPage
		title={"lab.recipe.index"}
		icon={<RecipeIcon/>}
		onBack={navigate => navigate("/lab")}
	>
		<BubbleMenu
			translation={"lab.recipe"}
			actions={[
				{
					key: "create.button",
					bold: true,
					onClick: ({navigate}) => navigate("/lab/recipe/create"),
				},
			]}
		/>
		<RecipeProviderControl
			defaultSize={DEFAULT_LIST_SIZE}
		>
			<RecipeList/>
		</RecipeProviderControl>
	</MobileLabPage>;
});
