import {AromaIcon} from "@/puff-smith/component/icon/AromaIcon";
import {DEFAULT_LIST_SIZE} from "@/puff-smith/component/misc";
import {IAroma} from "@/puff-smith/service/aroma/interface";
import {AromaCreateForm} from "@/puff-smith/ui/aroma/form/AromaCreateForm";
import {AromaNameInline} from "@/puff-smith/ui/aroma/inline/AromaNameInline";
import {MixtureInline} from "@/puff-smith/ui/mixture/inline/MixtureInline";
import {AromaDrawerItem, AromaProviderControl} from "@/sdk/api/aroma/query";
import {MixtureDrawerItem, MixtureProviderControl} from "@/sdk/api/mixture/query";
import {MobileFormItem, toLocalDate, Translate, useMobileFormContext} from "@leight-core/client";
import {uniqueOf} from "@leight-core/utils";
import {DatePicker, Form} from "antd-mobile";
import {DatePickerRef} from "antd-mobile/es/components/date-picker";
import {FC, RefObject, useState} from "react";

export interface ILiquidFieldsProps {
}

export const LiquidFields: FC<ILiquidFieldsProps> = () => {
	const formContext = useMobileFormContext();
	const nicotine = 1;
	const nicotineTolerance = Form.useWatch(["nicotineTolerance"], formContext.form);
	const boosterVolume = Form.useWatch(["booster", "volume"], formContext.form);
	const boosterVgPg = Form.useWatch(["booster", "vgpg"], formContext.form);
	const boosterNicotine = Form.useWatch(["booster", "nicotine"], formContext.form);
	const baseVgPg = Form.useWatch(["base", "vgpg"], formContext.form);
	const vgpg = Form.useWatch(["vgpg"], formContext.form);
	const [aroma, setAroma] = useState<IAroma>();
	const isFilled = aroma ? aroma.volume === aroma.content : undefined;
	return <>
		<AromaProviderControl
			defaultSize={DEFAULT_LIST_SIZE}
		>
			<AromaDrawerItem
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
				render={aroma => <AromaNameInline aroma={aroma}/>}
				toPreview={selection => selection?.single ? <AromaNameInline aroma={selection.single}/> : undefined}
				createWith={({formContext, visibleContext}) => <AromaCreateForm
					onSuccess={({response}) => {
						formContext.setValue([
							{name: "aromaId", value: response.id},
						]);
						visibleContext.hide();
					}}
				/>}
				createWithDrawer={{
					translation: {
						namespace: "shared.aroma.create",
						text: "title",
					},
				}}
				icon={<AromaIcon/>}
			/>
		</AromaProviderControl>
		{isFilled !== true && <MixtureProviderControl
			defaultSize={5}
			applyFilter={aroma ? {
				mixture: {
					aroma: {
						content: aroma.content,
						volume: aroma.volume,
						nicotine: aroma.nicotine || undefined,
						vg: aroma.vg,
						pg: aroma.pg,
					},
					vg: vgpg?.[0] ? parseInt(vgpg[0]) : undefined,
					pg: vgpg?.[0] ? (100 - vgpg[0]) : undefined,
					booster: nicotine > 0 && boosterVolume && boosterVgPg?.[0] ? uniqueOf([
						{
							volume: boosterVolume,
							vg: parseInt(boosterVgPg[0]),
							pg: 100 - boosterVgPg[0],
							nicotine: boosterNicotine,
						},
						{
							volume: boosterVolume,
							vg: Math.max(parseInt(boosterVgPg[0]) - 10, 0),
							pg: Math.min(100 - boosterVgPg[0] + 10, 100),
							nicotine: boosterNicotine,
						},
						{
							volume: boosterVolume,
							vg: Math.min(parseInt(boosterVgPg[0]) + 10, 100),
							pg: Math.max(100 - boosterVgPg[0] - 10, 0),
							nicotine: boosterNicotine,
						},
					], "vg") : undefined,
					base: baseVgPg?.[0] ? uniqueOf([
						{
							vg: parseInt(baseVgPg[0]),
							pg: 100 - baseVgPg[0],
						},
						{
							vg: Math.max(parseInt(baseVgPg[0]) - 10, 0),
							pg: Math.min(100 - baseVgPg[0] + 10, 100),
						},
						{
							vg: Math.min(parseInt(baseVgPg[0]) + 10, 100),
							pg: Math.max(100 - baseVgPg[0] - 10, 0),
						},
					], "vg") : undefined,
					nicotine,
					nicotineTolerance,
				},
			} : undefined}
		>
			<MixtureDrawerItem
				field={"mixture"}
				disabled={(!aroma || !boosterVgPg?.length) && !isFilled}
				withFulltext={false}
				required
				hasTooltip
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

