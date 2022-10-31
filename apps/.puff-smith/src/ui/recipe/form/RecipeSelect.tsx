import {RecipeCreateForm} from "@/puff-smith/ui/recipe/form/RecipeCreateForm";
import {RecipeInline}     from "@/puff-smith/ui/recipe/inline/RecipeInline";
import {
    RecipeDrawerItem,
    RecipeProviderControl
}                         from "@/sdk/api/recipe/query";
import {
    ComponentProps,
    FC
}                         from "react";

export interface IRecipeSelectProps extends Omit<ComponentProps<typeof RecipeDrawerItem>, "render" | "toPreview"> {
}

export const RecipeSelect: FC<IRecipeSelectProps> = props => {
	return <RecipeProviderControl
		defaultSize={5}
	>
		<RecipeDrawerItem
			render={recipe => <RecipeInline recipe={recipe}/>}
			toPreview={selection => selection?.single ? <RecipeInline recipe={selection?.single}/> : undefined}
			createWith={({formContext, visibleContext}) => <RecipeCreateForm
				onSuccess={({response}) => {
					formContext.setValue([
						{name: "recipeId", value: response.id},
					]);
					visibleContext.hide();
				}}
			/>}
			createWithDrawer={{
				translation: {
					namespace: "shared.recipe.create",
					text:      "title",
				},
			}}
			{...props}
		/>
	</RecipeProviderControl>;
};
