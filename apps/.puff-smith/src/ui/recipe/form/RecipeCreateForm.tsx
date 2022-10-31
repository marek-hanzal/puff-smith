import {RecipeIcon}   from "@/puff-smith/component/icon/RecipeIcon";
import {RecipeFields} from "@/puff-smith/ui/recipe/form/RecipeFields";
import {
    IRecipeCreateDefaultMobileFormProps,
    RecipeCreateDefaultMobileForm
}                     from "@/sdk/api/recipe/create";
import {FC}           from "react";

export interface IRecipeCreateFormProps extends Partial<IRecipeCreateDefaultMobileFormProps> {
}

export const RecipeCreateForm: FC<IRecipeCreateFormProps> = props => {
	return <RecipeCreateDefaultMobileForm
		icon={<RecipeIcon/>}
		toForm={() => ({
			draw:              ["50"],
			vgpg:              ["50"],
			nicotine:          6,
			nicotineTolerance: 1.5,
			booster:           {
				vgpg:     ["70"],
				nicotine: 18,
				volume:   10,
			},
			base:              {
				vgpg: ["70"],
			},
		})}
		toMutation={({draw, vgpg: [vgpg], booster: {vgpg: [boosterVgPg], nicotine, volume}, base: {vgpg: [baseVgPg]}, ...values}) => ({
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
		<RecipeFields/>
	</RecipeCreateDefaultMobileForm>;
};
