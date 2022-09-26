import {AromaIcon} from "@/puff-smith/component/icon/AromaIcon";
import {VgPgInline} from "@/puff-smith/component/inline/VgPgInline";
import {DEFAULT_LIST_SIZE} from "@/puff-smith/component/misc";
import {IAroma} from "@/puff-smith/service/aroma/interface";
import {AromaCreateForm} from "@/puff-smith/ui/aroma/form/AromaCreateForm";
import {AromaNameInline} from "@/puff-smith/ui/aroma/inline/AromaNameInline";
import {MixtureInline} from "@/puff-smith/ui/mixture/inline/MixtureInline";
import {AromaDrawerItem, AromaProviderControl} from "@/sdk/api/aroma/query";
import {MixtureDrawerItem, MixtureProviderControl} from "@/sdk/api/mixture/query";
import {ItemGroup, MobileFormItem, toLocalDate, Translate, useMobileFormContext} from "@leight-core/client";
import {numbersOf, uniqueOf} from "@leight-core/utils";
import {Typography} from "antd";
import {DatePicker, Form, Picker, Space, Stepper} from "antd-mobile";
import {DatePickerRef} from "antd-mobile/es/components/date-picker";
import {PickerRef} from "antd-mobile/es/components/picker";
import {FC, RefObject, useState} from "react";

export interface ILiquidFieldsProps {
}

export const LiquidFields: FC<ILiquidFieldsProps> = () => {
	const formContext = useMobileFormContext();
	const nicotine = Form.useWatch(["nicotine"], formContext.form);
	const boosterVolume = Form.useWatch(["booster", "volume"], formContext.form);
	const boosterVgPg = Form.useWatch(["booster", "vgpg"], formContext.form);
	const boosterNicotine = Form.useWatch(["booster", "nicotine"], formContext.form);
	const baseVgPg = Form.useWatch(["base", "vgpg"], formContext.form);
	const vgpg = Form.useWatch(["vgpg"], formContext.form);
	const [aroma, setAroma] = useState<IAroma>();
	return <>
		<AromaProviderControl
			defaultSize={DEFAULT_LIST_SIZE}
		>
			<AromaDrawerItem
				field={"aromaId"}
				required
				onSelection={selection => setAroma(selection.single)}
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
		<MobileFormItem
			field={"draw"}
			hasTooltip
			trigger={"onConfirm"}
			onClick={(_, ref: RefObject<PickerRef>) => ref.current?.open()}
		>
			<Picker
				forceRender
				title={<Translate text={"shared.liquid.draw.picker"}/>}
				confirmText={<Translate namespace={"common"} text={"confirm"}/>}
				cancelText={<Translate namespace={"common"} text={"cancel"}/>}
				mouseWheel={true}
				onConfirm={([value]) => {
					value && formContext.setValue([
						{
							name: ["vgpg"],
							value: [value],
						},
						{
							name: ["nicotine"],
							value: {
								"50": 6,
								"70": 3,
							}[value],
						},
						{
							name: ["booster", "vgpg"],
							value: [{
								"50": "70",
								"70": "100",
							}[value]],
						},
						{
							name: ["base", "vgpg"],
							value: [{
								"50": "70",
								"70": "100",
							}[value]],
						},
					]);
				}}
				columns={[
					[
						{type: "mtl", value: "50"},
						{type: "dl", value: "70"},
					].map(({type, value}) => ({
						value,
						label: <Space>
							<Translate namespace={"common.draw"} text={type}/>
							<Typography.Text type={"secondary"}><Translate namespace={"common.draw"} text={`${type}.hint`}/></Typography.Text>
						</Space>,
					}))
				]}
			>
				{([value]) => value?.label || <Translate text={"shared.vgpg.placeholder"}/>}
			</Picker>
		</MobileFormItem>
		<MobileFormItem
			field={"nicotine"}
			hasTooltip
		>
			<Stepper min={0} max={50} digits={1}/>
		</MobileFormItem>
		<MobileFormItem
			field={"vgpg"}
			required
			hasTooltip
			trigger={"onConfirm"}
			onClick={(_, ref: RefObject<PickerRef>) => ref.current?.open()}
		>
			<Picker
				forceRender
				title={<Translate text={"shared.vgpg.picker.title"}/>}
				confirmText={<Translate namespace={"common"} text={"confirm"}/>}
				cancelText={<Translate namespace={"common"} text={"cancel"}/>}
				mouseWheel={true}
				columns={[
					numbersOf(101).map(number => ({
						value: `${100 - number}`,
						label: <VgPgInline vgpg={{vg: 100 - number, pg: number}}/>,
					}))
				]}
			>
				{([value]) => value?.label || <Translate text={"shared.vgpg.placeholder"}/>}
			</Picker>
		</MobileFormItem>
		<ItemGroup prefix={"booster"}>
			<MobileFormItem
				field={"nicotine"}
				required={nicotine}
				disabled={!nicotine}
				hasTooltip
			>
				<Stepper min={1} max={250} digits={1}/>
			</MobileFormItem>
			<MobileFormItem
				field={"vgpg"}
				required={nicotine}
				disabled={!nicotine}
				hasTooltip
				trigger={"onConfirm"}
				onClick={(_, ref: RefObject<PickerRef>) => ref.current?.open()}
			>
				<Picker
					forceRender
					title={<Translate text={"shared.booster.vgpg.picker.title"}/>}
					confirmText={<Translate namespace={"common"} text={"confirm"}/>}
					cancelText={<Translate namespace={"common"} text={"cancel"}/>}
					mouseWheel={true}
					columns={[
						numbersOf(101).map(number => ({
							value: `${100 - number}`,
							label: <VgPgInline vgpg={{vg: 100 - number, pg: number}}/>,
						}))
					]}
				>
					{([value]) => value?.label || <Translate text={"shared.booster.vgpg.placeholder"}/>}
				</Picker>
			</MobileFormItem>
			<MobileFormItem
				field={"volume"}
				hasTooltip
				disabled={!nicotine}
			>
				<Stepper min={0} max={1000}/>
			</MobileFormItem>
		</ItemGroup>
		<ItemGroup prefix={"base"}>
			<MobileFormItem
				field={"vgpg"}
				required
				hasTooltip
				trigger={"onConfirm"}
				onClick={(_, ref: RefObject<PickerRef>) => ref.current?.open()}
			>
				<Picker
					forceRender
					title={<Translate text={"shared.base.vgpg.picker.title"}/>}
					confirmText={<Translate namespace={"common"} text={"confirm"}/>}
					cancelText={<Translate namespace={"common"} text={"cancel"}/>}
					mouseWheel={true}
					columns={[
						numbersOf(101).map(number => ({
							value: `${100 - number}`,
							label: <VgPgInline vgpg={{vg: 100 - number, pg: number}}/>,
						}))
					]}
				>
					{([value]) => value?.label || <Translate text={"shared.base.vgpg.placeholder"}/>}
				</Picker>
			</MobileFormItem>
		</ItemGroup>
		<MixtureProviderControl
			defaultSize={DEFAULT_LIST_SIZE}
			applyFilter={aroma && vgpg && baseVgPg ? {
				mixture: {
					aroma: {
						content: aroma.content,
						volume: aroma.volume,
						vg: aroma.vg,
						pg: aroma.pg,
					},
					vg: parseInt(vgpg[0]),
					pg: 100 - vgpg[0],
					booster: nicotine > 0 && boosterVolume && boosterVgPg ? uniqueOf([
						{
							volume: boosterVolume,
							vg: parseInt(boosterVgPg[0]),
							pg: 100 - boosterVgPg[0],
							nicotine: boosterNicotine,
						},
						{
							volume: boosterVolume,
							vg: Math.max(parseInt(baseVgPg[0]) - 10, 0),
							pg: Math.min(100 - baseVgPg[0] + 10, 100),
							nicotine: boosterNicotine,
						},
						{
							volume: boosterVolume,
							vg: Math.min(parseInt(baseVgPg[0]) + 10, 100),
							pg: Math.max(100 - baseVgPg[0] - 10, 0),
							nicotine: boosterNicotine,
						},
					], "vg") : undefined,
					base: uniqueOf([
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
					], "vg"),
					nicotine,
				},
			} : undefined}
		>
			<MixtureDrawerItem
				disabled={!aroma || !vgpg}
				withFulltext={false}
				field={"mixture"}
				required
				hasTooltip
				render={mixture => <MixtureInline mixture={mixture}/>}
				toPreview={selection => selection?.single ? <MixtureInline mixture={selection?.single}/> : undefined}
			/>
		</MixtureProviderControl>
		<MobileFormItem
			field={"mixed"}
			trigger={"onConfirm"}
			onClick={(_, ref: RefObject<DatePickerRef>) => ref.current?.open()}
			hasTooltip
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
