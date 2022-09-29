import {BubbleMenu} from "@leight-core/client";
import {FC} from "react";

export interface IRecipeIndexBubbleProps {
}

export const RecipeIndexBubble: FC<IRecipeIndexBubbleProps> = () => {
	return <BubbleMenu
		translation={"lab.recipe"}
		actions={[
			{
				key: "create.button",
				bold: true,
				onClick: ({navigate}) => navigate("/lab/recipe/create"),
			},
		]}
	/>;
};
