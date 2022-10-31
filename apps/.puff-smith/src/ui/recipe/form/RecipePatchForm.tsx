import {RecipeIcon}   from "@/puff-smith/component/icon/RecipeIcon";
import {IRecipe}      from "@/puff-smith/service/recipe/interface";
import {RecipeFields} from "@/puff-smith/ui/recipe/form/RecipeFields";
import {
    IRecipePatchDefaultMobileFormProps,
    RecipePatchDefaultMobileForm
}                     from "@/sdk/api/recipe/patch";
import {FC}           from "react";

export interface IRecipePatchFormProps extends Partial<IRecipePatchDefaultMobileFormProps> {
	recipe: IRecipe;
}

export const RecipePatchForm: FC<IRecipePatchFormProps> = ({recipe, ...props}) => {
	return <RecipePatchDefaultMobileForm
		icon={<RecipeIcon/>}
		toForm={() => ({
			...recipe,
			draw:    [`${recipe.vg}`],
			vgpg:    [`${recipe.vg}`],
			booster: {
				vgpg: [`${recipe?.booster?.vg}`],
				...recipe?.booster,
			},
			base:    {
				vgpg: [`${recipe?.base?.vg}`],
				...recipe?.base,
			},
		})}
		toMutation={({draw, vgpg: [vgpg], booster: {vgpg: [boosterVgPg], nicotine, volume}, base: {vgpg: [baseVgPg]}, ...values}) => ({
			id: recipe.id,
			...values,
			vg:      parseInt(vgpg),
			pg:      100 - vgpg,
			booster: {
				nicotine,
				volume,
				vg: parseInt(boosterVgPg),
				pg: 100 - boosterVgPg,
			},
			base:    {
				vg: parseInt(baseVgPg),
				pg: 100 - baseVgPg,
			},
		})}
		{...props}
	>
		<RecipeFields
			hidden={["draw"]}
		/>
	</RecipePatchDefaultMobileForm>;
};
