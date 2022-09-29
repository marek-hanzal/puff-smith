import {RecipeInline} from "@/puff-smith/ui/recipe/inline/RecipeInline";
import {RecipeListSwipe} from "@/puff-smith/ui/recipe/list/RecipeListSwipe";
import {IRecipeInfiniteListSourceProps, RecipeInfiniteListSource} from "@/sdk/api/recipe/query";
import {InfiniteListItem} from "@leight-core/client";
import {FC} from "react";

export interface IRecipeListProps extends Partial<IRecipeInfiniteListSourceProps> {
}

export const RecipeList: FC<IRecipeListProps> = props => {
	return <RecipeInfiniteListSource
		withFulltext
		{...props}
	>
		{recipe => <RecipeListSwipe key={recipe.id} recipe={recipe}>
			<InfiniteListItem
				onClick={navigate => navigate("/lab/recipe/[recipeId]", {recipeId: recipe.id})}
			>
				<RecipeInline recipe={recipe}/>
			</InfiniteListItem>
		</RecipeListSwipe>}
	</RecipeInfiniteListSource>;
};
