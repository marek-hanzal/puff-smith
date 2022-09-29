import {BaseIcon} from "@/puff-smith/component/icon/BaseIcon";
import {BoosterIcon} from "@/puff-smith/component/icon/BoosterIcon";
import {LiquidIcon} from "@/puff-smith/component/icon/LiquidIcon";
import {ContentInline} from "@/puff-smith/component/inline/ContentInline";
import {NicotineInline} from "@/puff-smith/component/inline/NicotineInline";
import {VgPgInline} from "@/puff-smith/component/inline/VgPgInline";
import {RecipeListSwipe} from "@/puff-smith/ui/recipe/list/RecipeListSwipe";
import {IRecipeInfiniteListSourceProps, RecipeInfiniteListSource} from "@/sdk/api/recipe/query";
import {InfiniteListItem, Translate} from "@leight-core/client";
import {Typography} from "antd";
import {Space} from "antd-mobile";
import {FC} from "react";

export interface IRecipeListProps extends Partial<IRecipeInfiniteListSourceProps> {
}

export const RecipeList: FC<IRecipeListProps> = props => {
	return <RecipeInfiniteListSource
		withFulltext
		{...props}
	>
		{recipe => <RecipeListSwipe recipe={recipe}>
			<InfiniteListItem
				onClick={navigate => navigate("/lab/recipe/[recipeId]", {recipeId: recipe.id})}
			>
				<Space
					direction={"vertical"}
					block
				>
					<Space>
						<Typography.Text type={"secondary"}>
							<LiquidIcon/>
						</Typography.Text>
						<VgPgInline vgpg={recipe}/>
						{recipe.nicotine && recipe.nicotine > 0 && <NicotineInline nicotine={recipe.nicotine}/>}
					</Space>
					{recipe.booster ? <Space>
						<Typography.Text type={"secondary"}>
							<BoosterIcon/>
						</Typography.Text>
						<VgPgInline vgpg={recipe.booster}/>
						<NicotineInline nicotine={recipe.booster.nicotine}/>
						<ContentInline content={recipe.booster.volume}/>
					</Space> : <Typography.Text type={"secondary"}>
						<Translate namespace={"shared.recipe.info"} text={"no-booster"}/>
					</Typography.Text>}
					{recipe.base ? <Space>
						<Typography.Text type={"secondary"}>
							<BaseIcon/>
						</Typography.Text>
						<VgPgInline vgpg={recipe.base}/>
					</Space> : <Typography.Text type={"secondary"}>
						<Translate namespace={"shared.recipe.info"} text={"no-base"}/>
					</Typography.Text>}
				</Space>
			</InfiniteListItem>
		</RecipeListSwipe>}
	</RecipeInfiniteListSource>;
};
