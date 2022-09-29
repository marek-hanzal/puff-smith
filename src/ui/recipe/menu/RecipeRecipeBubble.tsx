import {IRecipe} from "@/puff-smith/service/recipe/interface";
import {useRecipeDeleteMutation} from "@/sdk/api/recipe/delete";
import {BubbleMenu, DeleteConfirmDialog} from "@leight-core/client";
import {message} from "antd";
import {Toast} from "antd-mobile";
import {FC} from "react";
import {useTranslation} from "react-i18next";

export interface IRecipeRecipeBubbleProps {
	recipe: IRecipe;
}

export const RecipeRecipeBubble: FC<IRecipeRecipeBubbleProps> = ({recipe}) => {
	const {t} = useTranslation();
	const recipeDeleteMutation = useRecipeDeleteMutation();
	return <BubbleMenu
		translation={"lab.recipe"}
		actions={[
			{
				key: "edit.button",
				bold: true,
				onClick: ({navigate}) => navigate("/lab/recipe/[recipeId]/edit", {recipeId: recipe.id}),
			},
			{
				key: "delete.button",
				danger: true,
				onClick: async ({navigate, setVisible}) => {
					await DeleteConfirmDialog({
						translation: {
							namespace: "shared.recipe",
						},
						onConfirm: () => {
							Toast.show({
								icon: "loading",
								duration: 0,
							});
							recipeDeleteMutation.mutate([recipe.id], {
								onSuccess: () => {
									setVisible(false);
									Toast.show({
										icon: "success",
										duration: 500,
									});
									message.success(t("shared.recipe.delete.success"));
									navigate("/lab/recipe");
								},
								onError: () => {
									setVisible(false);
									Toast.show({
										icon: "fail",
										duration: 500,
									});
								},
							});
						},
					});
				},
			},
		]}
	/>;
};
