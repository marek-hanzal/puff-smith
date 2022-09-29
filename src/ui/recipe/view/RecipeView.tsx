import {ContentInline} from "@/puff-smith/component/inline/ContentInline";
import {NicotineInline} from "@/puff-smith/component/inline/NicotineInline";
import {VgPgInline} from "@/puff-smith/component/inline/VgPgInline";
import {IRecipe} from "@/puff-smith/service/recipe/interface";
import {Preview} from "@leight-core/client";
import {FC} from "react";

export interface IRecipeViewProps {
	recipe: IRecipe;
}

export const RecipeView: FC<IRecipeViewProps> = ({recipe}) => {
	return <Preview
		translation={"shared.recipe"}
		name={"shared.recipe"}
	>
		{[
			{
				name: "liquid",
				items: {
					vgpg: <VgPgInline vgpg={recipe}/>,
					nicotine: <NicotineInline nicotine={recipe.nicotine}/>,
					nicotineTolerance: <NicotineInline nicotine={recipe.nicotineTolerance}/>,
				},
			},
			{
				name: "base",
				items: {
					vgpg: <VgPgInline vgpg={recipe.base}/>,
					nicotine: <NicotineInline nicotine={recipe.base?.nicotine}/>,
				},
			},
			{
				name: "booster",
				items: {
					vgpg: <VgPgInline vgpg={recipe.booster}/>,
					nicotine: <NicotineInline nicotine={recipe.booster?.nicotine}/>,
					volume: <ContentInline content={recipe.booster?.volume}/>,
				},
			},
		]}
	</Preview>;
};
