import {RecipeIcon} from "@/puff-smith/component/icon/RecipeIcon";
import {DEFAULT_LIST_SIZE} from "@/puff-smith/component/misc";
import {MobileLabPage} from "@/puff-smith/site/lab/@module/component/MobileLabPage";
import {withLabLayout} from "@/puff-smith/site/lab/@module/layout/layout";
import {RecipeList} from "@/puff-smith/ui/recipe/list/RecipeList";
import {RecipeProviderControl} from "@/sdk/api/recipe/query";
import {CloseOutlined} from "@ant-design/icons";
import {BubbleMenu, ButtonLink, Translate} from "@leight-core/client";
import {Button, Divider} from "antd";

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
			{({filterContext}) => <>
				<RecipeList
					renderNothing={({sourceContext, cursorContext}) => <>
						<Divider>
							{!cursorContext?.total ? <ButtonLink
								type={"primary"}
								href={"/lab/recipe/create"}
								icon={<RecipeIcon/>}
								label={"shared.recipe.create.button"}
							/> : null}
							{cursorContext?.total ? <Button
								type={"link"}
								icon={<CloseOutlined/>}
								onClick={() => {
									sourceContext.reset();
									filterContext.setFilter({});
								}}
							>
									<span>
										<Translate namespace={"common.filter"} text={"clear.button"}/>
									</span>
							</Button> : null}
						</Divider>
					</>}
				/>
			</>}
		</RecipeProviderControl>
	</MobileLabPage>;
});
