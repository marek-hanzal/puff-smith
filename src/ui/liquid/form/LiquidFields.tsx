import {IAroma} from "@/puff-smith/service/aroma/interface";
import {IMixtureQuery} from "@/puff-smith/service/mixture/interface";
import {IRecipe} from "@/puff-smith/service/recipe/interface";
import {AromaSelect} from "@/puff-smith/ui/aroma/form/AromaSelect";
import {MixtureInline} from "@/puff-smith/ui/mixture/inline/MixtureInline";
import {RecipeSelect} from "@/puff-smith/ui/recipe/form/RecipeSelect";
import {MixtureDrawerItem, MixtureProviderControl} from "@/sdk/api/mixture/query";
import {IQueryFilter} from "@leight-core/api";
import {MobileFormItem, toLocalDate, Translate, useMobileFormContext} from "@leight-core/client";
import {uniqueOf} from "@leight-core/utils";
import {DatePicker} from "antd-mobile";
import {DatePickerRef} from "antd-mobile/es/components/date-picker";
import {FC, RefObject, useState} from "react";

export interface ILiquidFieldsProps {
}

export const LiquidFields: FC<ILiquidFieldsProps> = () => {
	const formContext = useMobileFormContext();
	const [aroma, setAroma] = useState<IAroma>();
	const [recipe, setRecipe] = useState<IRecipe>();
	const isFilled = aroma ? aroma.volume === aroma.content : undefined;
	const toMixtureFilter = (): IQueryFilter<IMixtureQuery> | undefined => {
		return aroma && recipe ? {
			mixture: {
				aroma: {
					content: aroma.content,
					volume: aroma.volume,
					nicotine: aroma.nicotine || undefined,
					vg: aroma.vg,
					pg: aroma.pg,
				},
				vg: recipe.vg,
				pg: recipe.pg,
				booster: recipe.nicotine && recipe.nicotine > 0 && recipe.booster ? uniqueOf([
					{
						nicotine: recipe.booster.nicotine,
						volume: recipe.booster.volume,
						vg: recipe.booster.vg,
						pg: recipe.booster.pg,
					},
					{
						nicotine: recipe.booster.nicotine,
						volume: recipe.booster.volume,
						vg: Math.max(recipe.booster.vg - 10, 0),
						pg: Math.min(recipe.booster.pg + 10, 100),
					},
					{
						nicotine: recipe.booster.nicotine,
						volume: recipe.booster.volume,
						vg: Math.min(recipe.booster.vg - 10, 100),
						pg: Math.max(recipe.booster.pg + 10, 0),
					},
				], "vg") : undefined,
				base: recipe.base ? uniqueOf([
					{
						vg: recipe.base.vg,
						pg: recipe.base.pg,
					},
					{
						vg: Math.max(recipe.base.vg - 10, 0),
						pg: Math.min(recipe.base.pg + 10, 100),
					},
					{
						vg: Math.min(recipe.base.vg - 10, 100),
						pg: Math.max(recipe.base.pg + 10, 0),
					},
				], "vg") : undefined,
				nicotine: recipe.nicotine,
				nicotineTolerance: recipe.nicotineTolerance,
			},
		} : undefined;
	};

	return <>
		<AromaSelect
			field={"aromaId"}
			required
			onSelection={selection => {
				setAroma(selection.single);
				formContext.setValues({
					mixture: undefined,
				});
			}}
			onClear={() => {
				setAroma(undefined);
				formContext.setValues({
					mixture: undefined,
				});
			}}
		/>
		<RecipeSelect
			field={"recipeId"}
			required
			onSelection={selection => {
				setRecipe(selection.single);
				formContext.setValues({
					mixture: undefined,
				});
			}}
			onClear={() => {
				setRecipe(undefined);
				formContext.setValues({
					mixture: undefined,
				});
			}}
		/>
		{isFilled !== true && <MixtureProviderControl
			defaultSize={5}
			applyFilter={toMixtureFilter()}
		>
			<MixtureDrawerItem
				field={"mixtureId"}
				disabled={!aroma || !recipe}
				withFulltext={false}
				required
				render={mixture => <MixtureInline mixture={mixture}/>}
				toPreview={selection => selection?.single ? <MixtureInline mixture={selection?.single}/> : undefined}
			/>
		</MixtureProviderControl>}
		<MobileFormItem
			field={"mixed"}
			trigger={"onConfirm"}
			onClick={(_, ref: RefObject<DatePickerRef>) => ref.current?.open()}
			hasTooltip
			toClear={() => null}
		>
			<DatePicker
				title={<Translate text={"shared.liquid.mixed.title"}/>}
				confirmText={<Translate namespace={"common"} text={"confirm"}/>}
				cancelText={<Translate namespace={"common"} text={"cancel"}/>}
				mouseWheel={true}
			>
				{value => toLocalDate(value)}
			</DatePicker>
		</MobileFormItem>
	</>;
};

